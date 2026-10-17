export interface MenuItem {
  id: string
  name: string
  price: number
  category: string
  section: string
  isVeg?: boolean
  popular?: boolean
  description?: string
}

export interface MenuSectionType {
  id: string
  title: string
  subtitle: string
  items: MenuItem[]
}

export const menuCategories: MenuSectionType[] = [
  {
    id: 'chinese-starters',
    title: 'Chinese & Starters',
    subtitle: 'Crispy, saucy delicacies crafted for every palate',
    items: [
      { id: 'cs-1', name: 'Chilli Paneer', price: 239, category: 'Chinese - Veg Starters', section: 'chinese-starters', isVeg: true, popular: true, description: 'Wok-tossed cottage cheese cubes with bell peppers and green chillies' },
      { id: 'cs-2', name: 'Chicken Lollipop', price: 259, category: 'Chinese - Non-Veg Starters', section: 'chinese-starters', isVeg: false, popular: true, description: 'Frenzied chicken drumettes tossed in fiery Indo-Chinese spices' },
      { id: 'cs-3', name: 'Crispy Chilli Potato', price: 199, category: 'Chinese - Veg Starters', section: 'chinese-starters', isVeg: true, description: 'Golden potato fingers glazed with honey chilli sauce and sesame' },
      { id: 'cs-4', name: 'Drums of Heaven', price: 279, category: 'Chinese - Non-Veg Starters', section: 'chinese-starters', isVeg: false, popular: true, description: 'Tender chicken wings coated in sweet-garlic Schezwan glaze' },
      { id: 'cs-5', name: 'Veg Manchurian', price: 229, category: 'Chinese - Veg Starters', section: 'chinese-starters', isVeg: true, description: 'Deep-fried vegetable dumplings tossed in tangy soya-ginger sauce' },
      { id: 'cs-6', name: 'Chilli Chicken', price: 259, category: 'Chinese - Non-Veg Starters', section: 'chinese-starters', isVeg: false, description: 'Diced chicken fried and sauteed with hot chillies and scallions' },
      { id: 'cs-7', name: 'Chilli Mushroom', price: 229, category: 'Chinese - Veg Starters', section: 'chinese-starters', isVeg: true, description: 'Button mushrooms sauteed in hot chilli garlic gravy' },
      { id: 'cs-8', name: 'Spicy Chicken Wings', price: 259, category: 'Chinese - Non-Veg Starters', section: 'chinese-starters', isVeg: false, description: 'Marinated crispy chicken wings infused with spicy pepper sauce' },
      { id: 'cs-9', name: 'Crispy Chilli Baby Corn', price: 239, category: 'Chinese - Veg Starters', section: 'chinese-starters', isVeg: true, description: 'Golden fried baby corn fingers tossed in spicy pepper sauce' },
      { id: 'cs-10', name: 'French Fries', price: 159, category: 'Chinese - Veg Starters', section: 'chinese-starters', isVeg: true, description: 'Classic golden salted potato fries served with dip' },
      { id: 'cs-11', name: 'Chicken Manchurian', price: 229, category: 'Chinese - Non-Veg Starters', section: 'chinese-starters', isVeg: false, description: 'Crisp chicken bites simmered in rich coriander garlic sauce' },
    ],
  },
  {
    id: 'rice-noodles',
    title: 'Chinese Rice & Noodles',
    subtitle: 'Aromatic wok-tossed noodles and fried rice bowls',
    items: [
      { id: 'rn-1', name: 'Veg Noodles', price: 199, category: 'Chinese - Rice / Noodles', section: 'rice-noodles', isVeg: true, popular: true, description: 'Hakka noodles tossed with julienne seasonal vegetables' },
      { id: 'rn-2', name: 'Non-Veg Fried Rice', price: 219, category: 'Chinese - Rice / Noodles', section: 'rice-noodles', isVeg: false, popular: true, description: 'Wok-charred long grain rice tossed with egg and chicken bits' },
      { id: 'rn-3', name: 'Veg Fried Rice', price: 189, category: 'Chinese - Rice / Noodles', section: 'rice-noodles', isVeg: true, description: 'Fragrant basmati stir-fried with garden veggies and light soya' },
      { id: 'rn-4', name: 'Non-Veg Noodles', price: 229, category: 'Chinese - Rice / Noodles', section: 'rice-noodles', isVeg: false, description: 'Egg and chicken stir-fried hakka noodles with spring onion' },
    ],
  },
  {
    id: 'tandoor-breads',
    title: 'Tandoor & Breads',
    subtitle: 'Clay-oven charred tikkas and freshly baked tandoori breads',
    items: [
      { id: 'tb-1', name: 'Paneer Tikka', price: 249, category: 'Tandoor - Veg / Non-Veg', section: 'tandoor-breads', isVeg: true, popular: true, description: 'Cottage cheese marinated in mustard oil, ajwain and curd, char-grilled' },
      { id: 'tb-2', name: 'Chicken Tikka', price: 299, category: 'Tandoor - Veg / Non-Veg', section: 'tandoor-breads', isVeg: false, popular: true, description: 'Boneless chicken cubes spiced with hung curd and tandoori masala' },
      { id: 'tb-3', name: 'Tandoori Chicken', price: 349, category: 'Tandoor - Veg / Non-Veg', section: 'tandoor-breads', isVeg: false, popular: true, description: 'Whole chicken roasted on bone with traditional charcoal smoke' },
      { id: 'tb-4', name: 'Mushroom Tikka', price: 229, category: 'Tandoor - Veg / Non-Veg', section: 'tandoor-breads', isVeg: true, description: 'Fresh button mushrooms marinated with spiced yoghurt and charred' },
      { id: 'tb-5', name: 'Butter Naan', price: 59, category: 'Breads', section: 'tandoor-breads', isVeg: true, popular: true, description: 'Soft leavened tandoor bread brushed with melted butter' },
      { id: 'tb-6', name: 'Plain Naan', price: 49, category: 'Breads', section: 'tandoor-breads', isVeg: true, description: 'Classic fluffy clay oven baked refined flour bread' },
      { id: 'tb-7', name: 'Laccha Paratha', price: 59, category: 'Breads', section: 'tandoor-breads', isVeg: true, description: 'Multi-layered crispy whole wheat flaky tandoor bread' },
      { id: 'tb-8', name: 'Masala Kulcha', price: 79, category: 'Breads', section: 'tandoor-breads', isVeg: true, description: 'Bread stuffed with spiced potato and onion mixture' },
      { id: 'tb-9', name: 'Tandoori Roti', price: 39, category: 'Breads', section: 'tandoor-breads', isVeg: true, description: 'Whole wheat flatbread baked in clay tandoor' },
      { id: 'tb-10', name: 'Butter Tandoori Roti', price: 49, category: 'Breads', section: 'tandoor-breads', isVeg: true, description: 'Tandoori roti glazed with butter' },
    ],
  },
  {
    id: 'main-course',
    title: 'Indian Main Course',
    subtitle: 'Rich gravies, royal curries, and handi specialties',
    items: [
      { id: 'mc-1', name: 'Paneer Butter Masala', price: 249, category: 'Indian Main Course - Veg', section: 'main-course', isVeg: true, popular: true, description: 'Paneer cubes simmered in rich creamy tomato and butter makhani gravy' },
      { id: 'mc-2', name: 'Chicken Butter Masala', price: 299, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, popular: true, description: 'Tandoori chicken in velvety tomato, butter, and fenugreek gravy' },
      { id: 'mc-3', name: 'Mutton Champaran', price: 349, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, popular: true, description: 'Bihar special slow-cooked clay pot mutton with whole garlic pods' },
      { id: 'mc-4', name: 'Paneer Lababdar', price: 249, category: 'Indian Main Course - Veg', section: 'main-course', isVeg: true, popular: true, description: 'Grated and cubed paneer cooked in aromatic onion-cashew masala' },
      { id: 'mc-5', name: 'Chicken Kadhai', price: 289, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, description: 'Chicken cooked with freshly ground coriander seeds and bell peppers' },
      { id: 'mc-6', name: 'Mutton Rogan Josh', price: 359, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, popular: true, description: 'Tender mutton braised with Kashmiri red chillies and yogurt' },
      { id: 'mc-7', name: 'Kadhai Paneer', price: 239, category: 'Indian Main Course - Veg', section: 'main-course', isVeg: true, description: 'Paneer chunks tossed in spicy kadhai gravy with capsicum' },
      { id: 'mc-8', name: 'Chicken Kolhapuri', price: 289, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, description: 'Spicy Maharashtra style chicken cooked in toasted coconut gravy' },
      { id: 'mc-9', name: 'Mutton Kosha', price: 349, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, description: 'Slow-browned mutton in thick, luscious, intensely spiced onion gravy' },
      { id: 'mc-10', name: 'Mutton Curry', price: 339, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, description: 'Traditional homestyle mutton curry with whole spices' },
      { id: 'mc-11', name: 'Shahi Paneer', price: 249, category: 'Indian Main Course - Veg', section: 'main-course', isVeg: true, description: 'Royal Mughlai preparation of paneer in sweetish cashew cream gravy' },
      { id: 'mc-12', name: 'Chicken Do Pyaza', price: 349, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, description: 'Chicken prepared with generous amounts of caramelized and diced onions' },
      { id: 'mc-13', name: 'Chicken Curry', price: 269, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, description: 'Rustic Indian village style chicken curry with ginger garlic base' },
      { id: 'mc-14', name: 'Paneer Kali Mirch', price: 239, category: 'Indian Main Course - Veg', section: 'main-course', isVeg: true, description: 'Cottage cheese in rich white gravy infused with cracked black pepper' },
      { id: 'mc-15', name: 'Mix Veg', price: 219, category: 'Indian Main Course - Veg', section: 'main-course', isVeg: true, description: 'Assorted garden fresh vegetables in spiced brown masala' },
      { id: 'mc-16', name: 'Vegetable Kali Mirch', price: 219, category: 'Indian Main Course - Veg', section: 'main-course', isVeg: true, description: 'Seasonal vegetables cooked in creamy black pepper gravy' },
      { id: 'mc-17', name: 'Chicken Kosha', price: 279, category: 'Indian Main Course - Non-Veg', section: 'main-course', isVeg: false, description: 'Semi-dry slow-cooked chicken with rich caramelised onion paste' },
    ],
  },
  {
    id: 'biryani-desserts',
    title: 'Biryani & Desserts',
    subtitle: 'Dum-cooked biryanis and sweet conclusions',
    items: [
      { id: 'bd-1', name: 'Chicken Biryani', price: 259, category: 'Biryani', section: 'biryani-desserts', isVeg: false, popular: true, description: 'Fragrant basmati layered with succulent spiced chicken and saffron' },
      { id: 'bd-2', name: 'Mutton Biryani', price: 349, category: 'Biryani', section: 'biryani-desserts', isVeg: false, popular: true, description: 'Tender baby mutton cooked on dum with long grain basmati rice' },
      { id: 'bd-3', name: 'Veg Biryani', price: 199, category: 'Biryani', section: 'biryani-desserts', isVeg: true, description: 'Layered rice with garden veggies, mint, fried onions, and kewra water' },
      { id: 'bd-4', name: 'Gulab Jamun', price: 89, category: 'Dessert', section: 'biryani-desserts', isVeg: true, popular: true, description: 'Warm khoya dumplings soaked in fragrant cardamom rose sugar syrup' },
      { id: 'bd-5', name: 'Rasgulla', price: 89, category: 'Dessert', section: 'biryani-desserts', isVeg: true, description: 'Classic spongy cottage cheese spheres in light sugar syrup' },
      { id: 'bd-6', name: 'Butterscotch Ice Cream', price: 79, category: 'Ice Cream', section: 'biryani-desserts', isVeg: true, description: 'Crunchy caramel praline ice cream scoop' },
      { id: 'bd-7', name: 'Mango Ice Cream', price: 79, category: 'Ice Cream', section: 'biryani-desserts', isVeg: true, description: 'Alphonso mango cream scoop' },
      { id: 'bd-8', name: 'Chocolate Ice Cream', price: 69, category: 'Ice Cream', section: 'biryani-desserts', isVeg: true, description: 'Rich chocolate scoop' },
      { id: 'bd-9', name: 'Vanilla Ice Cream', price: 69, category: 'Ice Cream', section: 'biryani-desserts', isVeg: true, description: 'Classic vanilla bean scoop' },
      { id: 'bd-10', name: 'Strawberry Ice Cream', price: 69, category: 'Ice Cream', section: 'biryani-desserts', isVeg: true, description: 'Sweet strawberry cream scoop' },
    ],
  },
  {
    id: 'mojitos-mocktails',
    title: 'Mojitos & Mocktails',
    subtitle: '15+ refreshing mocktails, coolers, and fruity elixirs',
    items: [
      { id: 'mm-1', name: 'Virgin Mojito', price: 149, category: 'Choice of Mojito', section: 'mojitos-mocktails', isVeg: true, popular: true, description: 'Crushed mint, fresh lime wedges, sparkling soda and demerara sugar' },
      { id: 'mm-2', name: 'Blue Lagoon', price: 149, category: 'Choice of Mocktail', section: 'mojitos-mocktails', isVeg: true, popular: true, description: 'Curacao citrus syrup, lemon fizz, and crushed ice' },
      { id: 'mm-3', name: 'Green Mint Mojito', price: 149, category: 'Choice of Mojito', section: 'mojitos-mocktails', isVeg: true, popular: true, description: 'Extra fresh mountain garden mint with lemonade and fizz' },
      { id: 'mm-4', name: 'Virgin Pinacolada', price: 229, category: 'Choice of Mocktail', section: 'mojitos-mocktails', isVeg: true, popular: true, description: 'Creamy blend of fresh pineapple juice and coconut cream' },
      { id: 'mm-5', name: 'Green Apple Mojito', price: 179, category: 'Choice of Mojito', section: 'mojitos-mocktails', isVeg: true, description: 'Crisp green apple syrup with fresh lime and mint sprigs' },
      { id: 'mm-6', name: 'Watermelon Mojito', price: 179, category: 'Choice of Mojito', section: 'mojitos-mocktails', isVeg: true, description: 'Fresh juicy watermelon extract muddled with mint and soda' },
      { id: 'mm-7', name: 'Blue Coconut Sky Mojito', price: 199, category: 'Choice of Mojito', section: 'mojitos-mocktails', isVeg: true, description: 'Coconut milk essence and blue curacao with crushed ice' },
      { id: 'mm-8', name: 'Bartender Special', price: 299, category: 'Choice of Mocktail', section: 'mojitos-mocktails', isVeg: true, popular: true, description: "House mystery blend of exotic fruit juices and smoked botanicals" },
      { id: 'mm-9', name: 'Mango Martini (Mocktail)', price: 179, category: 'Choice of Mocktail', section: 'mojitos-mocktails', isVeg: true, description: 'Sweet mango pulp shaken with citrus juice and rimmed with salt' },
      { id: 'mm-10', name: 'Litchi Martini', price: 179, category: 'Choice of Mocktail', section: 'mojitos-mocktails', isVeg: true, description: 'Fragrant litchi nectar with lemon spritz' },
      { id: 'mm-11', name: 'Guava Chilly', price: 149, category: 'Choice of Mocktail', section: 'mojitos-mocktails', isVeg: true, description: 'Ripe pink guava juice rimmed with red chilli and black salt' },
      { id: 'mm-12', name: 'Mix Fruit Punch', price: 179, category: 'Choice of Mocktail', section: 'mojitos-mocktails', isVeg: true, description: 'Pineapple, orange, and mango juices with splash of grenadine' },
    ],
  },
  {
    id: 'shakes-beverages',
    title: 'Shakes & Shakes Bar',
    subtitle: 'Thick creamy milkshakes, cold coffee, and chilled sips',
    items: [
      { id: 'sb-1', name: 'Oreo Shake', price: 199, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, popular: true, description: 'Crushed Oreo cookies blended with chocolate ice cream and whipped cream' },
      { id: 'sb-2', name: 'Cold Coffee with Ice Cream', price: 229, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, popular: true, description: 'Creamy espresso shake topped with vanilla bean ice cream scoop' },
      { id: 'sb-3', name: 'Kitkat Shake', price: 199, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, popular: true, description: 'Crisp KitKat chocolate bars blended with creamy milk' },
      { id: 'sb-4', name: 'Chocolate Shake', price: 149, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, description: 'Rich Dutch chocolate blended with chilled milk' },
      { id: 'sb-5', name: 'Strawberry Shake', price: 149, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, description: 'Sweet strawberry puree blended with creamy milk' },
      { id: 'sb-6', name: 'Mango Shake', price: 149, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, description: 'Seasonal sweet mango pulp blended with rich chilled milk' },
      { id: 'sb-7', name: 'Butterscotch Shake', price: 149, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, description: 'Creamy butterscotch syrup with praline crunch' },
      { id: 'sb-8', name: 'Vanilla Shake', price: 149, category: 'Choice of Shake', section: 'shakes-beverages', isVeg: true, description: 'Classic velvety vanilla milkshake' },
      { id: 'sb-9', name: 'Fresh Juice', price: 129, category: 'Choice of Mocktail', section: 'shakes-beverages', isVeg: true, description: 'Freshly pressed seasonal fruit juice' },
    ],
  },
]
