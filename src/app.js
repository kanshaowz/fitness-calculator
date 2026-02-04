        // Input Validation Functions
        function validateInput(value, min, max, fieldName) {
            const num = parseFloat(value);
            if (isNaN(num) || num < min || num > max) {
                const errorMsg = currentLang === 'zh' ? `${fieldName} 必须在 ${min} 到 ${max} 之间` :
                               currentLang === 'ja' ? `${fieldName} は ${min} から ${max} の間である必要があります` :
                               currentLang === 'ko' ? `${fieldName}은(는) ${min}에서 ${max} 사이여야 합니다` :
                               `${fieldName} must be between ${min} and ${max}`;
                alert(errorMsg);
                return null;
            }
            return num;
        }

        function validateAge(value) {
            return validateInput(value, 1, 120, translations[currentLang]['label-age'] || 'Age');
        }

        function validateWeight(value) {
            return validateInput(value, 1, 500, translations[currentLang]['label-weight'] || 'Weight');
        }

        function validateHeight(value) {
            return validateInput(value, 1, 300, translations[currentLang]['label-height'] || 'Height');
        }

        // Unit Conversion Functions
        let isMetric = localStorage.getItem('unitSystem') !== 'imperial';

        function lbsToKg(lbs) {
            return lbs * 0.453592;
        }

        function kgToLbs(kg) {
            return kg * 2.20462;
        }

        function inchesToCm(inches) {
            return inches * 2.54;
        }

        function cmToInches(cm) {
            return cm * 0.393701;
        }

        function ftInToCm(ft, inches) {
            return (ft * 12 + inches) * 2.54;
        }

        function toggleUnits() {
            isMetric = !isMetric;
            localStorage.setItem('unitSystem', isMetric ? 'metric' : 'imperial');
            updateUnitLabels();
            return isMetric;
        }

        function updateUnitLabels() {
            const unitLabels = document.querySelectorAll('.unit-label');
            unitLabels.forEach(label => {
                const type = label.dataset.unit;
                if (type === 'weight') {
                    label.textContent = isMetric ? 'kg' : 'lbs';
                } else if (type === 'height') {
                    label.textContent = isMetric ? 'cm' : 'in';
                }
            });
        }

        // Translations
        const translations = {
            en: {
                subtitle: "Advanced Fitness & Health Calculator",
                "tab-bmi": "BMI Calculator",
                "tab-bodyfat": "Body Fat %",
                "tab-bmr": "BMR Calculator",
                "tab-tdee": "TDEE Calculator",
                "tab-calories": "Calorie Goals",
                "tab-macros": "Macros Calculator",
                "tab-heartrate": "Heart Rate Zones",
                "bmi-title": "Body Mass Index (BMI) Calculator",
                "label-weight": "Weight (kg)",
                "label-height": "Height (cm)",
                "btn-calculate-bmi": "Calculate BMI",
                "bodyfat-title": "Body Fat Percentage Calculator",
                "label-gender": "Gender",
                "gender-male": "Male",
                "gender-female": "Female",
                "label-weight-bf": "Weight (kg)",
                "label-height-bf": "Height (cm)",
                "label-age-bf": "Age",
                "label-neck": "Neck (cm)",
                "label-waist": "Waist (cm)",
                "label-hip": "Hip (cm)",
                "label-female-only": "(Female only)",
                "btn-calculate-bf": "Calculate Body Fat",
                "bmr-title": "Basal Metabolic Rate (BMR) Calculator",
                "label-gender-bmr": "Gender",
                "gender-male-bmr": "Male",
                "gender-female-bmr": "Female",
                "label-weight-bmr": "Weight (kg)",
                "label-height-bmr": "Height (cm)",
                "label-age-bmr": "Age",
                "btn-calculate-bmr": "Calculate BMR",
                "tdee-title": "Total Daily Energy Expenditure (TDEE) Calculator",
                "label-gender-tdee": "Gender",
                "gender-male-tdee": "Male",
                "gender-female-tdee": "Female",
                "label-weight-tdee": "Weight (kg)",
                "label-height-tdee": "Height (cm)",
                "label-age-tdee": "Age",
                "label-activity": "Activity Level",
                "activity-sedentary": "Sedentary (little or no exercise)",
                "activity-light": "Lightly active (1-3 days/week)",
                "activity-moderate": "Moderately active (3-5 days/week)",
                "activity-very": "Very active (6-7 days/week)",
                "activity-extra": "Extra active (physical job or 2x training)",
                "btn-calculate-tdee": "Calculate TDEE",
                "calories-title": "Calorie Goals Calculator",
                "label-gender-cal": "Gender",
                "gender-male-cal": "Male",
                "gender-female-cal": "Female",
                "label-weight-cal": "Weight (kg)",
                "label-height-cal": "Height (cm)",
                "label-age-cal": "Age",
                "label-activity-cal": "Activity Level",
                "activity-sedentary-cal": "Sedentary (little or no exercise)",
                "activity-light-cal": "Lightly active (1-3 days/week)",
                "activity-moderate-cal": "Moderately active (3-5 days/week)",
                "activity-very-cal": "Very active (6-7 days/week)",
                "activity-extra-cal": "Extra active (physical job or 2x training)",
                "label-goal": "Goal",
                "goal-lose": "Lose Weight (0.5 kg/week)",
                "goal-lose-fast": "Lose Weight Fast (1 kg/week)",
                "goal-maintain": "Maintain Weight",
                "goal-gain": "Gain Weight (0.5 kg/week)",
                "goal-gain-fast": "Gain Weight Fast (1 kg/week)",
                "btn-calculate-cal": "Calculate Calorie Goals",
                "macros-title": "Macronutrient Calculator",
                "label-target-cal": "Target Calories",
                "label-diet-type": "Diet Type",
                "diet-balanced": "Balanced (40/30/30)",
                "diet-low-carb": "Low Carb (30/40/30)",
                "diet-high-protein": "High Protein (30/40/30)",
                "diet-keto": "Keto (5/25/70)",
                "diet-high-carb": "High Carb (50/25/25)",
                "btn-calculate-macros": "Calculate Macros",
                "heartrate-title": "Heart Rate Zones Calculator",
                "label-age-hr": "Age",
                "label-resting-hr": "Resting Heart Rate (optional)",
                "btn-calculate-hr": "Calculate Heart Rate Zones",
                "footer-text": "Medical-grade formulas • Data saved locally • Privacy first",
                "footer-disclaimer": "Disclaimer: This calculator is for informational purposes only. Consult a healthcare professional for medical advice.",
                "save-text": "✓ Data saved",
                // Result texts
                "your-bmi": "Your BMI",
                "category": "Category",
                "underweight": "Underweight",
                "normal": "Normal weight",
                "overweight": "Overweight",
                "obese": "Obese",
                "your-bodyfat": "Your Body Fat",
                "essential-fat": "Essential Fat",
                "athletes": "Athletes",
                "fitness": "Fitness",
                "average": "Average",
                "your-bmr": "Your BMR",
                "calories-per-day": "calories/day",
                "bmr-description": "This is the number of calories your body needs at rest to maintain vital functions.",
                "your-tdee": "Your TDEE",
                "tdee-description": "This is your Total Daily Energy Expenditure based on your activity level.",
                "your-calorie-goal": "Your Calorie Goal",
                "maintenance": "Maintenance",
                "protein": "Protein",
                "carbs": "Carbohydrates",
                "fat": "Fat",
                "grams-per-day": "g/day",
                "calories": "calories",
                "of-total": "of total",
                "heart-rate-zones": "Heart Rate Zones",
                "max-hr": "Max Heart Rate",
                "bpm": "bpm",
                "zone-1": "Zone 1: Very Light",
                "zone-2": "Zone 2: Light",
                "zone-3": "Zone 3: Moderate",
                "zone-4": "Zone 4: Hard",
                "zone-5": "Zone 5: Maximum",
                "zone-1-desc": "Warm up, recovery",
                "zone-2-desc": "Fat burning, base fitness",
                "zone-3-desc": "Aerobic training",
                "zone-4-desc": "Anaerobic threshold",
                "zone-5-desc": "Maximum effort"
            },
            zh: {
                subtitle: "高级健身与健康计算器",
                "tab-bmi": "BMI 计算器",
                "tab-bodyfat": "体脂率",
                "tab-bmr": "BMR 计算器",
                "tab-tdee": "TDEE 计算器",
                "tab-calories": "卡路里目标",
                "tab-macros": "营养素计算器",
                "tab-heartrate": "心率区间",
                "bmi-title": "身体质量指数 (BMI) 计算器",
                "label-weight": "体重 (公斤)",
                "label-height": "身高 (厘米)",
                "btn-calculate-bmi": "计算 BMI",
                "bodyfat-title": "体脂率计算器",
                "label-gender": "性别",
                "gender-male": "男性",
                "gender-female": "女性",
                "label-weight-bf": "体重 (公斤)",
                "label-height-bf": "身高 (厘米)",
                "label-age-bf": "年龄",
                "label-neck": "颈围 (厘米)",
                "label-waist": "腰围 (厘米)",
                "label-hip": "臀围 (厘米)",
                "label-female-only": "(仅限女性)",
                "btn-calculate-bf": "计算体脂率",
                "bmr-title": "基础代谢率 (BMR) 计算器",
                "label-gender-bmr": "性别",
                "gender-male-bmr": "男性",
                "gender-female-bmr": "女性",
                "label-weight-bmr": "体重 (公斤)",
                "label-height-bmr": "身高 (厘米)",
                "label-age-bmr": "年龄",
                "btn-calculate-bmr": "计算 BMR",
                "tdee-title": "每日总能量消耗 (TDEE) 计算器",
                "label-gender-tdee": "性别",
                "gender-male-tdee": "男性",
                "gender-female-tdee": "女性",
                "label-weight-tdee": "体重 (公斤)",
                "label-height-tdee": "身高 (厘米)",
                "label-age-tdee": "年龄",
                "label-activity": "活动水平",
                "activity-sedentary": "久坐 (几乎不运动)",
                "activity-light": "轻度活动 (每周1-3天)",
                "activity-moderate": "中度活动 (每周3-5天)",
                "activity-very": "高度活动 (每周6-7天)",
                "activity-extra": "超高活动 (体力工作或每天2次训练)",
                "btn-calculate-tdee": "计算 TDEE",
                "calories-title": "卡路里目标计算器",
                "label-gender-cal": "性别",
                "gender-male-cal": "男性",
                "gender-female-cal": "女性",
                "label-weight-cal": "体重 (公斤)",
                "label-height-cal": "身高 (厘米)",
                "label-age-cal": "年龄",
                "label-activity-cal": "活动水平",
                "activity-sedentary-cal": "久坐 (几乎不运动)",
                "activity-light-cal": "轻度活动 (每周1-3天)",
                "activity-moderate-cal": "中度活动 (每周3-5天)",
                "activity-very-cal": "高度活动 (每周6-7天)",
                "activity-extra-cal": "超高活动 (体力工作或每天2次训练)",
                "label-goal": "目标",
                "goal-lose": "减重 (每周0.5公斤)",
                "goal-lose-fast": "快速减重 (每周1公斤)",
                "goal-maintain": "维持体重",
                "goal-gain": "增重 (每周0.5公斤)",
                "goal-gain-fast": "快速增重 (每周1公斤)",
                "btn-calculate-cal": "计算卡路里目标",
                "macros-title": "宏量营养素计算器",
                "label-target-cal": "目标卡路里",
                "label-diet-type": "饮食类型",
                "diet-balanced": "均衡 (40/30/30)",
                "diet-low-carb": "低碳水 (30/40/30)",
                "diet-high-protein": "高蛋白 (30/40/30)",
                "diet-keto": "生酮 (5/25/70)",
                "diet-high-carb": "高碳水 (50/25/25)",
                "btn-calculate-macros": "计算营养素",
                "heartrate-title": "心率区间计算器",
                "label-age-hr": "年龄",
                "label-resting-hr": "静息心率 (可选)",
                "btn-calculate-hr": "计算心率区间",
                "footer-text": "医学级公式 • 本地存储数据 • 隐私优先",
                "footer-disclaimer": "免责声明：本计算器仅供参考，请咨询医疗专业人士获取医疗建议。",
                "save-text": "✓ 数据已保存",
                "your-bmi": "您的 BMI",
                "category": "类别",
                "underweight": "体重过轻",
                "normal": "正常体重",
                "overweight": "超重",
                "obese": "肥胖",
                "your-bodyfat": "您的体脂率",
                "essential-fat": "必需脂肪",
                "athletes": "运动员",
                "fitness": "健身",
                "average": "平均",
                "your-bmr": "您的 BMR",
                "calories-per-day": "卡路里/天",
                "bmr-description": "这是您的身体在静息状态下维持基本功能所需的卡路里数量。",
                "your-tdee": "您的 TDEE",
                "tdee-description": "这是您基于活动水平的每日总能量消耗。",
                "your-calorie-goal": "您的卡路里目标",
                "maintenance": "维持",
                "protein": "蛋白质",
                "carbs": "碳水化合物",
                "fat": "脂肪",
                "grams-per-day": "克/天",
                "calories": "卡路里",
                "of-total": "占总量",
                "heart-rate-zones": "心率区间",
                "max-hr": "最大心率",
                "bpm": "次/分",
                "zone-1": "区间1：极轻度",
                "zone-2": "区间2：轻度",
                "zone-3": "区间3：中度",
                "zone-4": "区间4：高强度",
                "zone-5": "区间5：最大强度",
                "zone-1-desc": "热身，恢复",
                "zone-2-desc": "燃脂，基础体能",
                "zone-3-desc": "有氧训练",
                "zone-4-desc": "无氧阈值",
                "zone-5-desc": "最大努力"
            },
            ja: {
                subtitle: "高度なフィットネス・健康計算機",
                "tab-bmi": "BMI 計算機",
                "tab-bodyfat": "体脂肪率",
                "tab-bmr": "BMR 計算機",
                "tab-tdee": "TDEE 計算機",
                "tab-calories": "カロリー目標",
                "tab-macros": "マクロ計算機",
                "tab-heartrate": "心拍ゾーン",
                "bmi-title": "ボディマス指数 (BMI) 計算機",
                "label-weight": "体重 (kg)",
                "label-height": "身長 (cm)",
                "btn-calculate-bmi": "BMIを計算",
                "bodyfat-title": "体脂肪率計算機",
                "label-gender": "性別",
                "gender-male": "男性",
                "gender-female": "女性",
                "label-weight-bf": "体重 (kg)",
                "label-height-bf": "身長 (cm)",
                "label-age-bf": "年齢",
                "label-neck": "首周り (cm)",
                "label-waist": "ウエスト (cm)",
                "label-hip": "ヒップ (cm)",
                "label-female-only": "(女性のみ)",
                "btn-calculate-bf": "体脂肪率を計算",
                "bmr-title": "基礎代謝量 (BMR) 計算機",
                "label-gender-bmr": "性別",
                "gender-male-bmr": "男性",
                "gender-female-bmr": "女性",
                "label-weight-bmr": "体重 (kg)",
                "label-height-bmr": "身長 (cm)",
                "label-age-bmr": "年齢",
                "btn-calculate-bmr": "BMRを計算",
                "tdee-title": "総消費カロリー (TDEE) 計算機",
                "label-gender-tdee": "性別",
                "gender-male-tdee": "男性",
                "gender-female-tdee": "女性",
                "label-weight-tdee": "体重 (kg)",
                "label-height-tdee": "身長 (cm)",
                "label-age-tdee": "年齢",
                "label-activity": "活動レベル",
                "activity-sedentary": "座りがち (ほとんど運動なし)",
                "activity-light": "軽い活動 (週1-3日)",
                "activity-moderate": "中程度の活動 (週3-5日)",
                "activity-very": "高い活動 (週6-7日)",
                "activity-extra": "非常に高い活動 (肉体労働または1日2回のトレーニング)",
                "btn-calculate-tdee": "TDEEを計算",
                "calories-title": "カロリー目標計算機",
                "label-gender-cal": "性別",
                "gender-male-cal": "男性",
                "gender-female-cal": "女性",
                "label-weight-cal": "体重 (kg)",
                "label-height-cal": "身長 (cm)",
                "label-age-cal": "年齢",
                "label-activity-cal": "活動レベル",
                "activity-sedentary-cal": "座りがち (ほとんど運動なし)",
                "activity-light-cal": "軽い活動 (週1-3日)",
                "activity-moderate-cal": "中程度の活動 (週3-5日)",
                "activity-very-cal": "高い活動 (週6-7日)",
                "activity-extra-cal": "非常に高い活動 (肉体労働または1日2回のトレーニング)",
                "label-goal": "目標",
                "goal-lose": "減量 (週0.5kg)",
                "goal-lose-fast": "急速減量 (週1kg)",
                "goal-maintain": "体重維持",
                "goal-gain": "増量 (週0.5kg)",
                "goal-gain-fast": "急速増量 (週1kg)",
                "btn-calculate-cal": "カロリー目標を計算",
                "macros-title": "マクロ栄養素計算機",
                "label-target-cal": "目標カロリー",
                "label-diet-type": "食事タイプ",
                "diet-balanced": "バランス (40/30/30)",
                "diet-low-carb": "低炭水化物 (30/40/30)",
                "diet-high-protein": "高タンパク質 (30/40/30)",
                "diet-keto": "ケトジェニック (5/25/70)",
                "diet-high-carb": "高炭水化物 (50/25/25)",
                "btn-calculate-macros": "マクロを計算",
                "heartrate-title": "心拍ゾーン計算機",
                "label-age-hr": "年齢",
                "label-resting-hr": "安静時心拍数 (オプション)",
                "btn-calculate-hr": "心拍ゾーンを計算",
                "footer-text": "医療グレードの計算式 • ローカルデータ保存 • プライバシー優先",
                "footer-disclaimer": "免責事項: この計算機は情報提供のみを目的としています。医療アドバイスについては医療専門家にご相談ください。",
                "save-text": "✓ データ保存完了",
                "your-bmi": "あなたのBMI",
                "category": "カテゴリー",
                "underweight": "低体重",
                "normal": "正常体重",
                "overweight": "過体重",
                "obese": "肥満",
                "your-bodyfat": "あなたの体脂肪率",
                "essential-fat": "必須脂肪",
                "athletes": "アスリート",
                "fitness": "フィットネス",
                "average": "平均",
                "your-bmr": "あなたのBMR",
                "calories-per-day": "カロリー/日",
                "bmr-description": "これは安静時に体が基本機能を維持するために必要なカロリー数です。",
                "your-tdee": "あなたのTDEE",
                "tdee-description": "これはあなたの活動レベルに基づいた1日の総消費カロリーです。",
                "your-calorie-goal": "あなたのカロリー目標",
                "maintenance": "維持",
                "protein": "タンパク質",
                "carbs": "炭水化物",
                "fat": "脂肪",
                "grams-per-day": "g/日",
                "calories": "カロリー",
                "of-total": "全体の",
                "heart-rate-zones": "心拍ゾーン",
                "max-hr": "最大心拍数",
                "bpm": "bpm",
                "zone-1": "ゾーン1：非常に軽い",
                "zone-2": "ゾーン2：軽い",
                "zone-3": "ゾーン3：中程度",
                "zone-4": "ゾーン4：きつい",
                "zone-5": "ゾーン5：最大",
                "zone-1-desc": "ウォームアップ、回復",
                "zone-2-desc": "脂肪燃焼、基礎体力",
                "zone-3-desc": "有酸素トレーニング",
                "zone-4-desc": "無酸素閾値",
                "zone-5-desc": "最大努力"
            },
            ko: {
                subtitle: "고급 피트니스 및 건강 계산기",
                "tab-bmi": "BMI 계산기",
                "tab-bodyfat": "체지방률",
                "tab-bmr": "BMR 계산기",
                "tab-tdee": "TDEE 계산기",
                "tab-calories": "칼로리 목표",
                "tab-macros": "매크로 계산기",
                "tab-heartrate": "심박수 구간",
                "bmi-title": "체질량 지수 (BMI) 계산기",
                "label-weight": "체중 (kg)",
                "label-height": "키 (cm)",
                "btn-calculate-bmi": "BMI 계산",
                "bodyfat-title": "체지방률 계산기",
                "label-gender": "성별",
                "gender-male": "남성",
                "gender-female": "여성",
                "label-weight-bf": "체중 (kg)",
                "label-height-bf": "키 (cm)",
                "label-age-bf": "나이",
                "label-neck": "목둘레 (cm)",
                "label-waist": "허리둘레 (cm)",
                "label-hip": "엉덩이둘레 (cm)",
                "label-female-only": "(여성만)",
                "btn-calculate-bf": "체지방률 계산",
                "bmr-title": "기초대사율 (BMR) 계산기",
                "label-gender-bmr": "성별",
                "gender-male-bmr": "남성",
                "gender-female-bmr": "여성",
                "label-weight-bmr": "체중 (kg)",
                "label-height-bmr": "키 (cm)",
                "label-age-bmr": "나이",
                "btn-calculate-bmr": "BMR 계산",
                "tdee-title": "총 일일 에너지 소비량 (TDEE) 계산기",
                "label-gender-tdee": "성별",
                "gender-male-tdee": "남성",
                "gender-female-tdee": "여성",
                "label-weight-tdee": "체중 (kg)",
                "label-height-tdee": "키 (cm)",
                "label-age-tdee": "나이",
                "label-activity": "활동 수준",
                "activity-sedentary": "좌식 생활 (운동 거의 없음)",
                "activity-light": "가벼운 활동 (주 1-3일)",
                "activity-moderate": "중간 활동 (주 3-5일)",
                "activity-very": "활발한 활동 (주 6-7일)",
                "activity-extra": "매우 활발한 활동 (육체 노동 또는 하루 2회 훈련)",
                "btn-calculate-tdee": "TDEE 계산",
                "calories-title": "칼로리 목표 계산기",
                "label-gender-cal": "성별",
                "gender-male-cal": "남성",
                "gender-female-cal": "여성",
                "label-weight-cal": "체중 (kg)",
                "label-height-cal": "키 (cm)",
                "label-age-cal": "나이",
                "label-activity-cal": "활동 수준",
                "activity-sedentary-cal": "좌식 생활 (운동 거의 없음)",
                "activity-light-cal": "가벼운 활동 (주 1-3일)",
                "activity-moderate-cal": "중간 활동 (주 3-5일)",
                "activity-very-cal": "활발한 활동 (주 6-7일)",
                "activity-extra-cal": "매우 활발한 활동 (육체 노동 또는 하루 2회 훈련)",
                "label-goal": "목표",
                "goal-lose": "체중 감량 (주당 0.5kg)",
                "goal-lose-fast": "빠른 체중 감량 (주당 1kg)",
                "goal-maintain": "체중 유지",
                "goal-gain": "체중 증가 (주당 0.5kg)",
                "goal-gain-fast": "빠른 체중 증가 (주당 1kg)",
                "btn-calculate-cal": "칼로리 목표 계산",
                "macros-title": "다량 영양소 계산기",
                "label-target-cal": "목표 칼로리",
                "label-diet-type": "식단 유형",
                "diet-balanced": "균형 (40/30/30)",
                "diet-low-carb": "저탄수화물 (30/40/30)",
                "diet-high-protein": "고단백질 (30/40/30)",
                "diet-keto": "케토 (5/25/70)",
                "diet-high-carb": "고탄수화물 (50/25/25)",
                "btn-calculate-macros": "매크로 계산",
                "heartrate-title": "심박수 구간 계산기",
                "label-age-hr": "나이",
                "label-resting-hr": "안정시 심박수 (선택사항)",
                "btn-calculate-hr": "심박수 구간 계산",
                "footer-text": "의학 등급 공식 • 로컬 데이터 저장 • 개인정보 우선",
                "footer-disclaimer": "면책 조항: 이 계산기는 정보 제공 목적으로만 사용됩니다. 의료 조언은 의료 전문가와 상담하십시오.",
                "save-text": "✓ 데이터 저장됨",
                "your-bmi": "귀하의 BMI",
                "category": "범주",
                "underweight": "저체중",
                "normal": "정상 체중",
                "overweight": "과체중",
                "obese": "비만",
                "your-bodyfat": "귀하의 체지방률",
                "essential-fat": "필수 지방",
                "athletes": "운동선수",
                "fitness": "피트니스",
                "average": "평균",
                "your-bmr": "귀하의 BMR",
                "calories-per-day": "칼로리/일",
                "bmr-description": "이것은 휴식 중에 신체가 기본 기능을 유지하는 데 필요한 칼로리 수입니다.",
                "your-tdee": "귀하의 TDEE",
                "tdee-description": "이것은 활동 수준에 따른 총 일일 에너지 소비량입니다.",
                "your-calorie-goal": "귀하의 칼로리 목표",
                "maintenance": "유지",
                "protein": "단백질",
                "carbs": "탄수화물",
                "fat": "지방",
                "grams-per-day": "g/일",
                "calories": "칼로리",
                "of-total": "전체의",
                "heart-rate-zones": "심박수 구간",
                "max-hr": "최대 심박수",
                "bpm": "bpm",
                "zone-1": "구간 1: 매우 가벼움",
                "zone-2": "구간 2: 가벼움",
                "zone-3": "구간 3: 중간",
                "zone-4": "구간 4: 힘듦",
                "zone-5": "구간 5: 최대",
                "zone-1-desc": "워밍업, 회복",
                "zone-2-desc": "지방 연소, 기초 체력",
                "zone-3-desc": "유산소 훈련",
                "zone-4-desc": "무산소 역치",
                "zone-5-desc": "최대 노력"
            }
        };

        // Current language
        let currentLang = localStorage.getItem('fitcalc-lang') || 'en';

        // Update translations
        function updateTranslations() {
            const lang = translations[currentLang];
            Object.keys(lang).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
                        element.placeholder = lang[key];
                        if (element.tagName === 'BUTTON') {
                            element.textContent = lang[key];
                        }
                    } else {
                        element.textContent = lang[key];
                    }
                }
            });
        }

        // Language switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentLang = btn.dataset.lang;
                localStorage.setItem('fitcalc-lang', currentLang);
                updateTranslations();
            });
        });

        // Set active language on load
        document.querySelector(`.lang-btn[data-lang="${currentLang}"]`).classList.add('active');
        updateTranslations();

        // Calculator tabs
        document.querySelectorAll('.calc-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const calcType = tab.dataset.calc;

                // Update tabs
                document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Update content
                document.querySelectorAll('.calc-content').forEach(c => c.classList.remove('active'));
                document.getElementById(`calc-${calcType}`).classList.add('active');

                // Save active tab
                localStorage.setItem('fitcalc-active-tab', calcType);
            });
        });

        // Restore active tab
        const activeTab = localStorage.getItem('fitcalc-active-tab');
        if (activeTab) {
            document.querySelector(`.calc-tab[data-calc="${activeTab}"]`)?.click();
        }

        // Show save indicator
        function showSaveIndicator() {
            const indicator = document.getElementById('save-indicator');
            indicator.classList.add('show');
            setTimeout(() => {
                indicator.classList.remove('show');
            }, 2000);
        }

        // Save to localStorage
        function saveData(key, value) {
            localStorage.setItem(`fitcalc-${key}`, value);
            showSaveIndicator();
        }

        // Load from localStorage
        function loadData(key) {
            return localStorage.getItem(`fitcalc-${key}`);
        }

        // Auto-fill saved data
        function autoFillForm(formId, fields) {
            fields.forEach(field => {
                const element = document.getElementById(`${formId}-${field}`);
                if (element) {
                    const savedValue = loadData(`${formId}-${field}`);
                    if (savedValue) {
                        if (element.type === 'radio') {
                            document.querySelector(`input[name="${formId}-${field}"][value="${savedValue}"]`).checked = true;
                        } else {
                            element.value = savedValue;
                        }
                    }
                }
            });
        }

        // BMI Calculator
        document.getElementById('bmi-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const weight = parseFloat(document.getElementById('bmi-weight').value);
            const height = parseFloat(document.getElementById('bmi-height').value) / 100; // cm to m

            saveData('bmi-weight', weight);
            saveData('bmi-height', height * 100);

            const bmi = weight / (height * height);
            let category, categoryClass;

            if (bmi < 18.5) {
                category = translations[currentLang]['underweight'];
                categoryClass = 'text-blue-400';
            } else if (bmi < 25) {
                category = translations[currentLang]['normal'];
                categoryClass = 'text-green-400';
            } else if (bmi < 30) {
                category = translations[currentLang]['overweight'];
                categoryClass = 'text-yellow-400';
            } else {
                category = translations[currentLang]['obese'];
                categoryClass = 'text-red-400';
            }

            document.getElementById('bmi-result').innerHTML = `
                <div class="result-box">
                    <p class="text-gray-300 mb-2">${translations[currentLang]['your-bmi']}</p>
                    <div class="result-value">${bmi.toFixed(1)}</div>
                    <p class="text-gray-300 mt-4">${translations[currentLang]['category']}</p>
                    <span class="category-label ${categoryClass}">${category}</span>
                </div>
            `;
            document.getElementById('bmi-result').classList.remove('hidden');
        });

        autoFillForm('bmi', ['weight', 'height']);

        // Body Fat Calculator (US Navy Method)
        document.getElementById('bodyfat-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const gender = document.querySelector('input[name="bf-gender"]:checked').value;
            const weight = parseFloat(document.getElementById('bf-weight').value);
            const height = parseFloat(document.getElementById('bf-height').value);
            const age = parseInt(document.getElementById('bf-age').value);
            const neck = parseFloat(document.getElementById('bf-neck').value);
            const waist = parseFloat(document.getElementById('bf-waist').value);
            const hip = parseFloat(document.getElementById('bf-hip').value) || 0;

            saveData('bf-gender', gender);
            saveData('bf-weight', weight);
            saveData('bf-height', height);
            saveData('bf-age', age);
            saveData('bf-neck', neck);
            saveData('bf-waist', waist);
            if (hip) saveData('bf-hip', hip);

            let bodyFat;

            if (gender === 'male') {
                // US Navy formula for men
                bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
            } else {
                // US Navy formula for women
                bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
            }

            let category, categoryClass;

            if (gender === 'male') {
                if (bodyFat < 6) {
                    category = translations[currentLang]['essential-fat'];
                    categoryClass = 'text-blue-400';
                } else if (bodyFat < 14) {
                    category = translations[currentLang]['athletes'];
                    categoryClass = 'text-green-400';
                } else if (bodyFat < 18) {
                    category = translations[currentLang]['fitness'];
                    categoryClass = 'text-cyan-400';
                } else if (bodyFat < 25) {
                    category = translations[currentLang]['average'];
                    categoryClass = 'text-yellow-400';
                } else {
                    category = translations[currentLang]['obese'];
                    categoryClass = 'text-red-400';
                }
            } else {
                if (bodyFat < 14) {
                    category = translations[currentLang]['essential-fat'];
                    categoryClass = 'text-blue-400';
                } else if (bodyFat < 21) {
                    category = translations[currentLang]['athletes'];
                    categoryClass = 'text-green-400';
                } else if (bodyFat < 25) {
                    category = translations[currentLang]['fitness'];
                    categoryClass = 'text-cyan-400';
                } else if (bodyFat < 32) {
                    category = translations[currentLang]['average'];
                    categoryClass = 'text-yellow-400';
                } else {
                    category = translations[currentLang]['obese'];
                    categoryClass = 'text-red-400';
                }
            }

            document.getElementById('bodyfat-result').innerHTML = `
                <div class="result-box">
                    <p class="text-gray-300 mb-2">${translations[currentLang]['your-bodyfat']}</p>
                    <div class="result-value">${bodyFat.toFixed(1)}%</div>
                    <p class="text-gray-300 mt-4">${translations[currentLang]['category']}</p>
                    <span class="category-label ${categoryClass}">${category}</span>
                </div>
            `;
            document.getElementById('bodyfat-result').classList.remove('hidden');
        });

        autoFillForm('bf', ['gender', 'weight', 'height', 'age', 'neck', 'waist', 'hip']);

        // BMR Calculator (Mifflin-St Jeor Equation)
        document.getElementById('bmr-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const gender = document.querySelector('input[name="bmr-gender"]:checked').value;
            const weight = parseFloat(document.getElementById('bmr-weight').value);
            const height = parseFloat(document.getElementById('bmr-height').value);
            const age = parseInt(document.getElementById('bmr-age').value);

            saveData('bmr-gender', gender);
            saveData('bmr-weight', weight);
            saveData('bmr-height', height);
            saveData('bmr-age', age);

            let bmr;

            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }

            document.getElementById('bmr-result').innerHTML = `
                <div class="result-box">
                    <p class="text-gray-300 mb-2">${translations[currentLang]['your-bmr']}</p>
                    <div class="result-value">${Math.round(bmr)}</div>
                    <p class="text-sm text-gray-400 mt-2">${translations[currentLang]['calories-per-day']}</p>
                    <p class="text-gray-300 mt-4 text-sm">${translations[currentLang]['bmr-description']}</p>
                </div>
            `;
            document.getElementById('bmr-result').classList.remove('hidden');
        });

        autoFillForm('bmr', ['gender', 'weight', 'height', 'age']);

        // TDEE Calculator
        document.getElementById('tdee-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const gender = document.querySelector('input[name="tdee-gender"]:checked').value;
            const weight = parseFloat(document.getElementById('tdee-weight').value);
            const height = parseFloat(document.getElementById('tdee-height').value);
            const age = parseInt(document.getElementById('tdee-age').value);
            const activity = parseFloat(document.getElementById('tdee-activity').value);

            saveData('tdee-gender', gender);
            saveData('tdee-weight', weight);
            saveData('tdee-height', height);
            saveData('tdee-age', age);
            saveData('tdee-activity', activity);

            let bmr;

            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }

            const tdee = bmr * activity;

            document.getElementById('tdee-result').innerHTML = `
                <div class="result-box">
                    <p class="text-gray-300 mb-2">${translations[currentLang]['your-tdee']}</p>
                    <div class="result-value">${Math.round(tdee)}</div>
                    <p class="text-sm text-gray-400 mt-2">${translations[currentLang]['calories-per-day']}</p>
                    <p class="text-gray-300 mt-4 text-sm">${translations[currentLang]['tdee-description']}</p>
                </div>
            `;
            document.getElementById('tdee-result').classList.remove('hidden');
        });

        autoFillForm('tdee', ['gender', 'weight', 'height', 'age', 'activity']);

        // Calorie Goals Calculator
        document.getElementById('calories-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const gender = document.querySelector('input[name="cal-gender"]:checked').value;
            const weight = parseFloat(document.getElementById('cal-weight').value);
            const height = parseFloat(document.getElementById('cal-height').value);
            const age = parseInt(document.getElementById('cal-age').value);
            const activity = parseFloat(document.getElementById('cal-activity').value);
            const goal = document.getElementById('cal-goal').value;

            saveData('cal-gender', gender);
            saveData('cal-weight', weight);
            saveData('cal-height', height);
            saveData('cal-age', age);
            saveData('cal-activity', activity);
            saveData('cal-goal', goal);

            let bmr;

            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }

            const tdee = bmr * activity;
            let targetCalories;

            switch(goal) {
                case 'lose':
                    targetCalories = tdee - 500;
                    break;
                case 'lose-fast':
                    targetCalories = tdee - 1000;
                    break;
                case 'maintain':
                    targetCalories = tdee;
                    break;
                case 'gain':
                    targetCalories = tdee + 500;
                    break;
                case 'gain-fast':
                    targetCalories = tdee + 1000;
                    break;
            }

            document.getElementById('calories-result').innerHTML = `
                <div class="result-box">
                    <p class="text-gray-300 mb-2">${translations[currentLang]['your-calorie-goal']}</p>
                    <div class="result-value">${Math.round(targetCalories)}</div>
                    <p class="text-sm text-gray-400 mt-2">${translations[currentLang]['calories-per-day']}</p>
                    <div class="mt-6 pt-6 border-t border-gray-700">
                        <p class="text-sm text-gray-400 mb-2">${translations[currentLang]['maintenance']}: ${Math.round(tdee)} ${translations[currentLang]['calories']}</p>
                        <p class="text-sm text-gray-400">BMR: ${Math.round(bmr)} ${translations[currentLang]['calories']}</p>
                    </div>
                </div>
            `;
            document.getElementById('calories-result').classList.remove('hidden');
        });

        autoFillForm('cal', ['gender', 'weight', 'height', 'age', 'activity', 'goal']);

        // Macros Calculator
        document.getElementById('macros-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const calories = parseInt(document.getElementById('macros-calories').value);
            const dietType = document.getElementById('macros-diet').value;

            saveData('macros-calories', calories);
            saveData('macros-diet', dietType);

            let proteinPercent, carbsPercent, fatPercent;

            switch(dietType) {
                case 'balanced':
                    carbsPercent = 40;
                    proteinPercent = 30;
                    fatPercent = 30;
                    break;
                case 'low-carb':
                    carbsPercent = 30;
                    proteinPercent = 40;
                    fatPercent = 30;
                    break;
                case 'high-protein':
                    carbsPercent = 30;
                    proteinPercent = 40;
                    fatPercent = 30;
                    break;
                case 'keto':
                    carbsPercent = 5;
                    proteinPercent = 25;
                    fatPercent = 70;
                    break;
                case 'high-carb':
                    carbsPercent = 50;
                    proteinPercent = 25;
                    fatPercent = 25;
                    break;
            }

            const proteinGrams = Math.round((calories * proteinPercent / 100) / 4);
            const carbsGrams = Math.round((calories * carbsPercent / 100) / 4);
            const fatGrams = Math.round((calories * fatPercent / 100) / 9);

            const proteinCals = proteinGrams * 4;
            const carbsCals = carbsGrams * 4;
            const fatCals = fatGrams * 9;

            document.getElementById('macros-result').innerHTML = `
                <div class="result-box">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <p class="text-sm text-gray-400 mb-2">${translations[currentLang]['protein']}</p>
                            <div class="text-3xl font-bold text-cyan-400">${proteinGrams}g</div>
                            <p class="text-xs text-gray-500 mt-1">${proteinCals} ${translations[currentLang]['calories']} • ${proteinPercent}% ${translations[currentLang]['of-total']}</p>
                            <div class="macro-bar">
                                <div class="macro-bar-fill" style="width: ${proteinPercent}%"></div>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400 mb-2">${translations[currentLang]['carbs']}</p>
                            <div class="text-3xl font-bold text-purple-400">${carbsGrams}g</div>
                            <p class="text-xs text-gray-500 mt-1">${carbsCals} ${translations[currentLang]['calories']} • ${carbsPercent}% ${translations[currentLang]['of-total']}</p>
                            <div class="macro-bar">
                                <div class="macro-bar-fill" style="width: ${carbsPercent}%"></div>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400 mb-2">${translations[currentLang]['fat']}</p>
                            <div class="text-3xl font-bold text-yellow-400">${fatGrams}g</div>
                            <p class="text-xs text-gray-500 mt-1">${fatCals} ${translations[currentLang]['calories']} • ${fatPercent}% ${translations[currentLang]['of-total']}</p>
                            <div class="macro-bar">
                                <div class="macro-bar-fill" style="width: ${fatPercent}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('macros-result').classList.remove('hidden');
        });

        autoFillForm('macros', ['calories', 'diet']);

        // Heart Rate Zones Calculator
        document.getElementById('heartrate-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const age = parseInt(document.getElementById('hr-age').value);
            const restingHR = parseInt(document.getElementById('hr-resting').value) || null;

            saveData('hr-age', age);
            if (restingHR) saveData('hr-resting', restingHR);

            const maxHR = 220 - age;

            let zones;

            if (restingHR) {
                // Karvonen formula (Heart Rate Reserve)
                const hrr = maxHR - restingHR;
                zones = [
                    { name: translations[currentLang]['zone-1'], desc: translations[currentLang]['zone-1-desc'], min: Math.round(restingHR + hrr * 0.5), max: Math.round(restingHR + hrr * 0.6), class: 'zone-very-light' },
                    { name: translations[currentLang]['zone-2'], desc: translations[currentLang]['zone-2-desc'], min: Math.round(restingHR + hrr * 0.6), max: Math.round(restingHR + hrr * 0.7), class: 'zone-light' },
                    { name: translations[currentLang]['zone-3'], desc: translations[currentLang]['zone-3-desc'], min: Math.round(restingHR + hrr * 0.7), max: Math.round(restingHR + hrr * 0.8), class: 'zone-moderate' },
                    { name: translations[currentLang]['zone-4'], desc: translations[currentLang]['zone-4-desc'], min: Math.round(restingHR + hrr * 0.8), max: Math.round(restingHR + hrr * 0.9), class: 'zone-hard' },
                    { name: translations[currentLang]['zone-5'], desc: translations[currentLang]['zone-5-desc'], min: Math.round(restingHR + hrr * 0.9), max: maxHR, class: 'zone-maximum' }
                ];
            } else {
                // Simple percentage of max HR
                zones = [
                    { name: translations[currentLang]['zone-1'], desc: translations[currentLang]['zone-1-desc'], min: Math.round(maxHR * 0.5), max: Math.round(maxHR * 0.6), class: 'zone-very-light' },
                    { name: translations[currentLang]['zone-2'], desc: translations[currentLang]['zone-2-desc'], min: Math.round(maxHR * 0.6), max: Math.round(maxHR * 0.7), class: 'zone-light' },
                    { name: translations[currentLang]['zone-3'], desc: translations[currentLang]['zone-3-desc'], min: Math.round(maxHR * 0.7), max: Math.round(maxHR * 0.8), class: 'zone-moderate' },
                    { name: translations[currentLang]['zone-4'], desc: translations[currentLang]['zone-4-desc'], min: Math.round(maxHR * 0.8), max: Math.round(maxHR * 0.9), class: 'zone-hard' },
                    { name: translations[currentLang]['zone-5'], desc: translations[currentLang]['zone-5-desc'], min: Math.round(maxHR * 0.9), max: maxHR, class: 'zone-maximum' }
                ];
            }

            let zonesHTML = zones.map(zone => `
                <div class="border-l-4 border-${zone.class.replace('zone-', '')} pl-4 py-2">
                    <p class="font-semibold ${zone.class}">${zone.name}</p>
                    <p class="text-2xl font-bold mt-1">${zone.min} - ${zone.max} ${translations[currentLang]['bpm']}</p>
                    <p class="text-sm text-gray-400 mt-1">${zone.desc}</p>
                </div>
            `).join('');

            document.getElementById('heartrate-result').innerHTML = `
                <div class="result-box">
                    <p class="text-gray-300 mb-2">${translations[currentLang]['heart-rate-zones']}</p>
                    <div class="mb-6 pb-6 border-b border-gray-700">
                        <p class="text-sm text-gray-400">${translations[currentLang]['max-hr']}</p>
                        <div class="text-4xl font-bold text-red-400 mt-1">${maxHR} ${translations[currentLang]['bpm']}</div>
                    </div>
                    <div class="space-y-4">
                        ${zonesHTML}
                    </div>
                </div>
            `;
            document.getElementById('heartrate-result').classList.remove('hidden');
        });

        autoFillForm('hr', ['age', 'resting']);
    </script>
