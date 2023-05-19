import AbstractView from "./AbstractView.js"
export default class extends AbstractView{
    constructor(params){
        //super use for bring constructoir from parents to child/key word.
        super(params)
        this.setTitle('aboutFood')
    }
        async getHtml(){
            return `
         <div class="container text-center">
        <h1 class="bg-success text-white h-100 p-4" style="background-color: #333; font-size: 32px; padding: 20px;">Welcome to the TP1-SPA</h1>
        <p class="bg-light p-4">
            Eating a healthy diet is essential for maintaining optimal health and well-being. A nutritious diet rich in
            fruits, vegetables, whole grains, lean proteins, and healthy fats provides the body with essential nutrients,
            vitamins, and minerals. It supports proper growth and development, boosts the immune system, and reduces the
            risk of chronic diseases.

            Healthy food choices are not only beneficial for physical health but also have a positive impact on mental
            well-being. Nutrient-dense foods can improve mood, increase energy levels, and enhance cognitive function.
            They promote better sleep, help manage stress, and contribute to overall mental clarity and focus.

            Incorporating a variety of colorful fruits and vegetables into your daily meals ensures a wide range of
            antioxidants, fiber, and phytonutrients. These compounds have powerful health benefits and protect the body
            against oxidative stress and inflammation. Additionally, consuming whole grains, such as brown rice, quinoa,
            and oats, provides sustained energy, supports digestive health, and helps regulate blood sugar levels.

            Lean proteins, including poultry, fish, legumes, and tofu, are essential for muscle growth and repair.
            Healthy fats, such as avocados, nuts, and olive oil, are important for brain function, heart health, and the
            absorption of fat-soluble vitamins.

            It's crucial to stay hydrated by drinking an adequate amount of water throughout the day. Water helps
            maintain proper bodily functions, aids in digestion, flushes out toxins, and keeps the skin healthy and
            radiant.

            Developing healthy eating habits is a lifelong journey. It's important to choose whole, unprocessed foods
            over highly processed and sugary options. Moderation is key, and incorporating regular physical activity
            along with a balanced diet can help maintain a healthy weight and overall well-being.

            Remember, food is not just fuel; it's an opportunity to nourish your body and enjoy the flavors and
            textures that nature provides. By making mindful choices and prioritizing your health, you can embark on a
            delicious and rewarding journey towards optimal wellness.
        </p>
        <div class="d-flex justify-content-center">
            <a href="/recipes-list" data-link class="btn btn-primary">List of the 50 random recipes</a>
        </div>
    </div>
            `;
        }
    }