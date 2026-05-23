const menu = [
  {
    id: "appetizers",
    letter: "A",
    title: "Appetizers",
    sections: [
      {
        title: "The Imperial Tandoor",
        note: "Flame-charred legacies",
        items: [
          item("Maharaja Prawns", "21.59", "Tiger prawns infused with citrus and House special Tandoori essence, kissed by fire for a perfect balance of heat, aroma, and oceanic sweetness.", "nonveg"),
          item("Pesto Shrimp Emeraldo", "23.59", "Succulent Jumbo Prawns marinated in a vibrant basil pesto, kissed by the tandoor flame for a smoky, aromatic finish.", "nonveg"),
          item("Royal Seekh of Kheema", "19.59", "Hand-crafted mutton skewers blended with our heirloom spices, cooked over glowing flames to create a delicately smoky, melt-in-mouth experience.", "nonveg"),
          item("Classic Tandoori Chicken", "18.59", "Succulent bone-in chicken infused with a secret heritage spice blend, roasted to tender perfection, with a smoky aroma that lingers in every bite.", "nonveg"),
          item("Crimson Kashmiri Murgh Tikka", "18.59", "Chicken marinated for 24 hours in a rich Kashmiri chili-spice symphony, then flame-seared for a fiery, jewel-toned finish.", "nonveg"),
          item("Malai Silk Murgh Kebab", "19.59", "Velvety morsels of chicken enriched with cream, green chili, and cardamom, kissed with subtle smoke, melting on the palate with every bite.", "nonveg"),
          item("Achaari Charred Wings", "18.59", "Orchard-raised wings marinated in bold pickling spices, crisped over embers to deliver a tangy, smoky, and deeply flavorful bite.", "nonveg", true),
          item("Artisan Ember Paneer", "17.59", "House-pressed paneer steaks enriched with a medley of spices, charred to perfection with a subtle smoky finish, paired with roasted bell peppers.", "veg"),
          item("Verdant Hariyali Paneer", "18.59", "Paneer enveloped in a vibrant blend of fresh mint, spinach, and toasted spices, offering a bright, herbaceous, and indulgent flavor experience.", "veg"),
          item("Charred Soya Chaap", "17.59", "Tender batons of delhi waala Soya chaap warmly slept in our house special marinade, and then slowly grilled & charred in tandoor to achieve a charred exterior and succulent bite.", "veg")
        ]
      },
      {
        title: "Dragon & Spice - Soups",
        note: "A vibrant journey blending the bold spices of India with the wok-fired flavors of Chinese. Add on: Custom House Veggies (+1) / Egg (+2) / Chicken (+3) / Prawn (+4) / Mixed (+5)",
        items: [
          item("Sweet Corn Soup", "8.99", "A comforting Indo-Chinese classic - silky broth with tender sweet corn kernels, gently seasoned with ginger, garlic, and a touch of soy. Add on your choice of protein or veggies to make it a meal.", "custom"),
          item("Tom Yum Soup", "9.99", "A bold, aromatic hot & sour Thai-inspired broth infused with lemongrass, galangal, kaffir lime leaves, and fiery chilies - a bright, invigorating bowl with every sip. Add on your choice of protein or veggies.", "custom")
        ]
      },
      {
        title: "Dragon & Spice - Appetizers",
        note: "A vibrant journey blending the bold spices of India with the wok-fired flavors of Chinese",
        items: [
          item("Veg Manchurian", "14.59", "Crisp vegetable balls tossed in a mildly spicy soy-garlic sauce.", "veg"),
          item("Gobi Manchurian", "14.59", "Cauliflower florets fried and coated in tangy Indo-Chinese sauce.", "veg"),
          item("Chilli Paneer", "15.99", "Soft paneer cubes sauteed with capsicum, onion, and tangy chili sauce.", "veg", true),
          item("Hyderabadi Chicken 65", "16.59", "South-Indian style fried chicken with bold masala and curry leaf tempering.", "nonveg", true),
          item("Chilli Chicken", "16.59", "Juicy chicken pieces tossed with bell peppers and spicy Indo-Chinese sauce.", "nonveg", true),
          item("Chicken Majestic", "17.59", "Tender chicken cooked with garlic, chili, and light soy sauce.", "nonveg"),
          item("Chicken Lollipops (Wet)", "17.59", "Crispy chicken wings coated in a glossy, spicy sauce.", "nonveg"),
          item("Drums of Heaven", "17.59", "Crispy chicken drumettes served with house-made honey-chili glaze.", "nonveg"),
          item("Dragon Chicken", "16.99", "Wok-tossed chicken with chili, garlic, and hint of sesame.", "nonveg", true)
        ]
      }
    ]
  },
  {
    id: "biryani-bread",
    letter: "B",
    title: "Biryani & Bread",
    sections: [
      {
        title: "Murli Ka Zaiqa",
        note: "The Royal Tradition",
        items: [
          item("Hyderabadi Chicken Dum Biryani", "17.59", "Fragrant basmati rice layered with marinated chicken, slow-cooked in the traditional Dum style with exotic herbs and saffron.", "nonveg"),
          item("Vijayawada Boneless Chicken Biryani", "18.59", "Tender boneless chicken marinated in a bold Andhra spice blend, layered over fragrant basmati rice cooked with whole spices, fresh mint, and coriander - rich, fiery, and deeply satisfying.", "nonveg", true),
          item("Hyderabadi Mutton Dum Biryani", "19.59", "Tender mutton pieces marinated overnight in yogurt and spices, layered with basmati rice and slow-cooked to perfection.", "nonveg"),
          item("Vijayawada Style Veg Biryani", "18.59", "A medley of fresh vegetables and paneer layered with aromatic basmati rice and cooked with subtle spices.", "veg"),
          item("Hyderabadi Veg Dum Biryani", "16.59", "A medley of fresh vegetables layered with aromatic basmati rice and dum cooked with subtle spices.", "veg")
        ]
      },
      {
        title: "Prelude Plates",
        note: "Devouring handcrafted recipes where traditional techniques meet contemporary expression",
        items: [
          item("Uff Uff Wings", "17.59", "When an enthusiastic Odiyan chilli meets the Spicy Telugu - We say Uff Uff.", "nonveg", true),
          item("Kheema Muttilu", "18.99", "Rathnamma's Recipe - Rustic minced meat dumplings with fresh herbs, and spices, pounded together for a rich and savory bite.", "nonveg"),
          item("Chettinad Mutton Sukka", "18.99", "Our Chef Bala's creation - Slow roasted mutton, tossed in roasted spices, curry leaves, and black pepper in achieving a semi dry, intensely aromatic South Indian Classic.", "nonveg", true),
          item("Gongura Chicken Dry", "17.59", "Succulent pieces of chicken wok-tossed with tangy gongura (sorrel leaves), infused with aromatic spices, garlic, and red chilies, finished with a smoky wok flavor for an irresistible bite.", "nonveg", true),
          item("Mangalorean Pompano Fry", "22.59", "Pompano bathed in a beauty of spices, rested in its peace. Patiently grilled on our well-seasoned Cast-Iron.", "nonveg"),
          item("Hyderabadi Royal Haleem", "18.59", "Basss... Khaa ke dekho! A royal delicacy slow-cooked to perfection.", "nonveg"),
          item("Marag", "18.99", "Shaan bolthe hum isko! Exquisite, rich, and flavorful soup.", "nonveg")
        ]
      },
      {
        title: "Artisanal Breads",
        items: [
          item("Plain Naan", "3.59", "Fresh and soft clay oven baked bread.", "veg"),
          item("Handmade Tandoori Roti", "4.59", "Whole wheat bread baked in tandoor.", "veg"),
          item("Butter Naan", "4.59", "Layered flatbread slathered in butter.", "veg"),
          item("Laccha Paratha", "5.59", "Flaky, multi-layered whole wheat bread.", "veg"),
          item("Garlic Naan", "4.99", "Infused with chopped garlic and butter.", "veg"),
          item("Paneer Paratha", "5.59", "Stuffed with spiced Indian cottage cheese.", "veg"),
          item("Chilly Garlic Naan", "5.59", "Topped with spicy green chilies and garlic.", "veg", true),
          item("Cheese Naan", "5.59", "Stuffed generously with melted cheese.", "veg"),
          item("Chilly Cheese Naan", "6.59", "Naan stuffed with spicy green chilies and melted cheese.", "veg", true),
          item("Bhature", "4.59", "Fluffy deep-fried leavened sourdough bread.", "veg")
        ]
      }
    ]
  },
  {
    id: "curries",
    letter: "C",
    title: "Curries",
    sections: [
      {
        title: "Anantha Shakhahaari",
        note: "Vegetarian Elegance",
        items: [
          item("Makhanwala Paneer Butter Masala", "16.99", "Soft paneer cubes enveloped in a luscious tomato-butter sauce, finished with cream and delicate Indian spices.", "veg"),
          item("Paneer Tikka Masala", "17.99", "Tandoor Char-grilled paneer simmered in a fragrant onion-tomato masala, kissed with subtle smokiness.", "veg"),
          item("Paneer Lababdar", "16.99", "Paneer cubes in a rich velvety, buttery gravy with aromatic spices and a hint of cream.", "veg"),
          item("Palak Paneer", "16.99", "Fresh spinach puree cooked with paneer cubes, lightly tempered with garlic and cumin.", "veg"),
          item("Malai Kofta", "17.99", "Pillowy dumplings of paneer and seasonal vegetables, floating in our lovely creamy secret spice infused, riped tomato gravy.", "veg"),
          item("Sarson Ka Saag", "16.99", "Slow-cooked mustard greens with a balance of spices, rustic and comforting.", "veg"),
          item("Mushroom Do Pyaza", "16.99", "Mushrooms sauteed with layers of onions and traditional masala.", "veg"),
          item("Mix Veg Jalfrezi", "16.99", "Seasonal vegetables sauteed with peppers and onions in a tangy tomato masala.", "veg"),
          item("Dal Makhani", "16.99", "Black lentils and kidney beans slow cooked with butter and cream for rich flavor.", "veg"),
          item("Dhaaba waala Tadka Dal", "15.99", "Yellow lentils tempered with cumin, garlic, and mild spices. This is simple, but taste our recipe and go crazy!", "veg"),
          item("Punjabi Chole", "16.99", "Chickpeas cooked with earthy, aromatic masalas to deliver robust and traditional flavor with every bite.", "veg"),
          item("Kadhi Pakora", "16.99", "Gram flour fritters simmered in yogurt-based curry with light tempering.", "veg")
        ]
      },
      {
        title: "The Mamsa Rasoi",
        note: "Non-Vegetarian Mastery",
        items: [
          item("Rogan Josh", "19.99", "Mutton cooked in yogurt and Kashmiri red chili gravy for gentle warmth.", "nonveg"),
          item("Lal Maas", "19.99", "Traditional fiery mutton curry prepared with secret chilies.", "nonveg", true),
          item("Telangana Dhaavath Mutton Curry", "19.99", "Rustic, slow-cooked mutton infused with the region's signature bold spices and aromatic undertones.", "nonveg", true),
          item("Munakkaya Mutton", "19.99", "Mutton and drumstick pods in a lightly spiced, hearty gravy, offering layered flavors and depth.", "nonveg"),
          item("Mutton Vindaloo", "19.99", "Tangy Goan-style curry with a gentle heat, balancing spices and vinegar notes for a bold yet refined taste.", "nonveg", true),
          item("Saag Gosht", "19.99", "Succulent mutton slow-cooked with fresh spinach, delivering an earthy, aromatic, and tender curry.", "nonveg"),
          item("Nilgiri Mutton Kofta", "19.99", "Hand-rolled mutton dumplings in our signature spiced green herb sauce, delicate yet flavorful.", "nonveg"),
          item("Kheema Matar", "19.99", "Minced mutton cooked with peas in lightly spiced masala.", "nonveg"),
          item("Kheema Mutti Curry", "19.99", "Home made kheema balls, served in our aromatic southern spiced sauce.", "nonveg"),
          item("Goan Prawn Curry", "22.99", "Prawns simmered in coconut-tamarind coastal gravy.", "nonveg"),
          item("Goan Fish Curry", "21.99", "Fresh fish cooked in tangy coconut-based gravy.", "nonveg"),
          item("Chepala Pulusu", "21.99", "Tamarind fish stew with subtle South Indian spices.", "nonveg"),
          item("Punjabi Dhaaba waala Anda Masala", "16.99", "Boiled eggs simmered in light onion-tomato masala.", "nonveg"),
          item("Delhi Waala Butter Chicken", "17.99", "Tandoor-roasted chicken in a tomato-butter gravy with mild spices.", "nonveg"),
          item("Kolhapuri Chicken", "17.99", "Chicken cooked with lightly roasted Kolhapuri masala.", "nonveg", true),
          item("Chicken Do Pyaza", "17.99", "Chicken cooked with layers of onions in a simple masala.", "nonveg"),
          item("Chicken Korma", "17.99", "Chicken in mild yogurt and nut-based sauce.", "nonveg"),
          item("Chicken Tikka Masala", "17.99", "Grilled chicken in spiced tomato-onion masala.", "nonveg"),
          item("Chicken Vindaloo", "17.99", "Spicy and tangy Goan chicken curry.", "nonveg", true),
          item("Andhra Home made Chicken Curry", "17.99", "Bone-In Chicken cooked with regional spices for balanced heat.", "nonveg", true),
          item("Ginger Chicken", "17.99", "Old Hyderabadi waala Chicken simmered in a crazy gravy of fresh ginger, green chili.", "nonveg"),
          item("Hyderabadi Dum Chicken", "17.99", "Slow-cooked chicken sealed with aromatic spices.", "nonveg"),
          item("Orissa Dhaaba Style Rambha Chicken", "17.99", "Regional-style chicken curry with secret sauce and spices.", "nonveg")
        ]
      },
      {
        title: "Wok & Fire",
        note: "Custom House Veggies (+1) / Egg (+2) / Chicken (+3) / Prawn (+4) / Mixed (+5)",
        items: [
          item("Wok fired Soft Noodles", "14.59", "Classic stir-fried noodles with vegetables and light soy seasoning.", "custom"),
          item("Schezwan Noodles", "15.59", "Spicy noodles with a bold, exotic Sichuan peppers schezwan sauce.", "custom", true),
          item("Singapore Noodles", "16.59", "Thin rice noodles stir-fried with curry-flavored vegetables and protein of choice.", "custom"),
          item("Pad Thai", "16.59", "Rice noodles tossed with egg, vegetables, and tamarind-infused sauce.", "custom"),
          item("Flamed & Tossed Fried Rice", "14.59", "Fragrant rice stir-fried with vegetables and house made seasonings.", "custom"),
          item("Schezwan Fried Rice", "15.59", "Lightly spice Rice with a twist of our house made schezwan sauce.", "custom", true),
          item("Chilli Garlic Fried Rice", "15.59", "An amalgamation of our Chilli & garlic into the flame burnt wok with granular rice.", "custom", true)
        ]
      }
    ]
  },
  {
    id: "desserts-drinks",
    letter: "D",
    title: "Desserts & Drinks",
    sections: [
      {
        title: "Desserts",
        items: [
          item("Misti Doi", "8.99", "Traditional Bengali sweet yogurt, slow-cooked to caramelized perfection.", "veg"),
          item("Gulab Jamun", "6.99", "Classic warm golden dumplings resting in rose-scented syrup, served hot.", "veg"),
          item("Tropical Pina Colada Tres Leches", "9.99", "A luscious tres leches cake infused with pineapple and coconut, delivering a creamy tropical finish in every bite.", "veg"),
          item("Decadent Chocolate Mousse Brownie", "8.99", "Rich fudgy brownie layered with silky chocolate mousse for an indulgent, deeply satisfying dessert experience.", "veg"),
          item("Custard Caramel Devour Puff", "9.99", "Delicate pastry filled with velvety custard, finished with golden caramel for a light yet irresistible treat.", "veg")
        ]
      },
      {
        title: "Drinks",
        items: [
          item("Mango Lassi", "5.59", "", "veg"),
          item("Thumps up", "3.99", "", "veg"),
          item("Limca", "3.99", "", "veg"),
          item("Jeera", "3.59", "", "veg")
        ]
      }
    ]
  }
];

const labels = {
  veg: { text: "Vegetarian", icon: "assets/icons/leaf.svg" },
  nonveg: { text: "Non-vegetarian", icon: "assets/icons/drumstick.svg" }
};

const root = document.querySelector("#menu-root");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const sectionLinks = [...document.querySelectorAll(".section-switcher a")];
const anchorLinks = [...document.querySelectorAll('a[href^="#"]')];
const launchNav = document.querySelector(".abcd-navigation");
const launchLetters = [...document.querySelectorAll(".abcd-letter")];
const activeDietFilters = new Set();
let sectionObserver;
let visibleSectionIds = new Set();
let activeLaunchLetter = 0;

function item(name, price, description, diet, spicy = false) {
  return { name, price, description, diet, spicy };
}

function render() {
  let visibleCount = 0;

  root.innerHTML = menu.map((category) => {
    let categoryCount = 0;
    const sections = category.sections.map((section) => {
      const items = section.items.filter((entry) => matchesFilter(entry, category));
      if (!items.length) return "";

      visibleCount += items.length;
      categoryCount += items.length;
      return `
        <section class="subsection">
          <div class="subsection-header">
            <h3 class="subsection-title">${escapeHtml(section.title)}</h3>
            ${section.note ? `<p class="subsection-note">${escapeHtml(section.note)}</p>` : ""}
          </div>
          ${renderDietBlocks(items, category)}
        </section>
      `;
    }).join("");

    if (!sections) return "";
    return `
      <section id="${category.id}" class="menu-category">
        <div class="category-heading">
          <div class="category-title-lockup">
            <h2>${escapeHtml(category.title)}</h2>
          </div>
          <span class="count">${categoryCount} ${categoryCount === 1 ? "item" : "items"}</span>
        </div>
        ${sections}
      </section>
    `;
  }).join("");

  emptyState.hidden = visibleCount > 0;
}

function renderDietBlocks(items, category) {
  const order = ["veg", "nonveg", "custom"];
  return order.map((diet) => {
    const dietItems = items.filter((entry) => entry.diet === diet);
    if (!dietItems.length) return "";

    if (diet === "custom") {
      return `
        <div class="diet-block">
          <div class="menu-grid">
            ${dietItems.map((entry) => renderItem(entry, category)).join("")}
          </div>
        </div>
      `;
    }

    return `
      <div class="diet-block">
        <h4 class="diet-heading">${labels[diet].text}</h4>
        <div class="menu-grid">
          ${dietItems.map((entry) => renderItem(entry, category)).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function renderItem(entry, category) {
  const showDietBadge = category?.id !== "desserts-drinks";
  const badges = [
    showDietBadge && labels[entry.diet] ? `<span class="badge badge-${entry.diet}" title="${labels[entry.diet].text}" aria-label="${labels[entry.diet].text}"><img src="${labels[entry.diet].icon}" alt=""></span>` : "",
    entry.spicy ? `<span class="badge badge-spicy" title="Spicy" aria-label="Spicy"><img src="assets/icons/chili.svg" alt=""></span>` : ""
  ].join("");

  return `
    <article class="menu-item" data-diet="${entry.diet}">
      <div class="item-topline">
        <h4 class="item-name">${escapeHtml(entry.name)}</h4>
        <span class="item-price">$${entry.price}</span>
      </div>
      <div class="badges">${badges}</div>
      ${entry.description ? `<p class="item-desc">${escapeHtml(entry.description)}</p>` : ""}
    </article>
  `;
}

function matchesFilter(entry, category) {
  if (category.id === "desserts-drinks") return true;
  if (!activeDietFilters.size) return true;
  if (entry.diet === "custom") return true;

  return activeDietFilters.has(entry.diet);
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    if (filter === "all") {
      activeDietFilters.clear();
    } else if (activeDietFilters.has(filter)) {
      activeDietFilters.delete(filter);
    } else {
      activeDietFilters.add(filter);
    }

    syncFilterButtons();
    render();
    observeSections();
  });
});

anchorLinks.forEach((link) => {
  link.addEventListener("click", () => link.blur());
});

syncFilterButtons();
render();
observeSections();
sequenceLaunchLetters();

function observeSections() {
  if (!("IntersectionObserver" in window)) return;
  sectionObserver?.disconnect();
  visibleSectionIds = new Set();

  const sections = [...document.querySelectorAll(".menu-category")];
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleSectionIds.add(entry.target.id);
      } else {
        visibleSectionIds.delete(entry.target.id);
      }
    });

    const activeEntry = sections
      .filter((section) => visibleSectionIds.has(section.id))
      .map((section) => ({
        id: section.id,
        distance: Math.abs(section.getBoundingClientRect().top - 96)
      }))
      .sort((a, b) => a.distance - b.distance)[0];

    sectionLinks.forEach((link) => {
      link.classList.toggle("is-active", Boolean(activeEntry) && link.hash === `#${activeEntry.id}`);
    });
  }, {
    rootMargin: "-12% 0px -55% 0px",
    threshold: [0.1, 0.35, 0.6]
  });

  sections.forEach((section) => sectionObserver.observe(section));
}

function sequenceLaunchLetters() {
  if (!launchLetters.length || !launchNav) return;

  launchNav.classList.add("is-sequencing");
  illuminateLaunchLetter();
  setInterval(() => {
    activeLaunchLetter = (activeLaunchLetter + 1) % launchLetters.length;
    illuminateLaunchLetter();
  }, 1400);
}

function illuminateLaunchLetter() {
  launchLetters.forEach((letter, index) => {
    letter.classList.toggle("seq-active", index === activeLaunchLetter);
  });
}

function syncFilterButtons() {
  filterButtons.forEach((button) => {
    const filter = button.dataset.filter;
    const isActive = filter === "all" ? activeDietFilters.size === 0 : activeDietFilters.has(filter);
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}
