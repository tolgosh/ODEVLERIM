// Initial Money
let remainingMoney = 100000000000; // 100 billion

// Item list with 50 different items, including image paths and quantities
const items = [
    { name: 'Luxury Car', price: 100000, quantity: 0, image: 'images/luxury-car.jpg' },
    { name: 'House', price: 300000, quantity: 0, image: 'images/house.jpg' },
    { name: 'Private Jet', price: 5000000, quantity: 0, image: 'images/private-jet.jpg' },
    { name: 'Yacht', price: 10000000, quantity: 0, image: 'images/yacht.jpg' },
    { name: 'Watch', price: 50000, quantity: 0, image: 'images/watch.jpg' },
    { name: 'Vacation', price: 10000, quantity: 0, image: 'images/vacation.jpg' },
    { name: 'Private Island', price: 15000000, quantity: 0, image: 'images/private-island.jpg' },
    { name: 'Super Bowl Ad', price: 5000000, quantity: 0, image: 'images/super-bowl-ad.jpg' },
    { name: 'Luxury Apartment', price: 2000000, quantity: 0, image: 'images/luxury-apartment.jpg' },
    { name: 'Diamond Ring', price: 250000, quantity: 0, image: 'images/diamond-ring.jpg' },
    { name: 'Skyscraper', price: 850000000, quantity: 0, image: 'images/skyscraper.jpg' },
    { name: 'Helicopter', price: 3000000, quantity: 0, image: 'images/helicopter.jpg' },
    { name: 'Football Team', price: 2000000000, quantity: 0, image: 'images/football-team.jpg' },
    { name: 'Gold Bar', price: 600000, quantity: 0, image: 'images/gold-bar.jpg' },
    { name: 'Art Collection', price: 4000000, quantity: 0, image: 'images/art-collection.jpg' },
    { name: 'Luxury Boat', price: 2000000, quantity: 0, image: 'images/luxury-boat.jpg' },
    { name: 'Private Concert', price: 200000, quantity: 0, image: 'images/private-concert.jpg' },
    { name: 'Vintage Car', price: 700000, quantity: 0, image: 'images/vintage-car.jpg' },
    { name: 'Exclusive Club Membership', price: 50000, quantity: 0, image: 'images/exclusive-club-membership.jpg' },
    { name: 'World Cruise', price: 150000, quantity: 0, image: 'images/world-cruise.jpg' },
    { name: 'Jet Ski', price: 12000, quantity: 0, image: 'images/jet-ski.jpg' },
    { name: 'Movie Ticket', price: 15, quantity: 0, image: 'images/movie-ticket.jpg' },
    { name: 'Designer Clothes', price: 8000, quantity: 0, image: 'images/designer-clothes.jpg' },
    { name: 'Gourmet Dinner', price: 500, quantity: 0, image: 'images/gourmet-dinner.jpg' },
    { name: 'Gaming Console', price: 500, quantity: 0, image: 'images/gaming-console.jpg' },
    { name: 'Luxury Handbag', price: 4000, quantity: 0, image: 'images/luxury-handbag.jpg' },
    { name: 'Wedding', price: 30000, quantity: 0, image: 'images/wedding.jpg' },
    { name: 'Horse', price: 10000, quantity: 0, image: 'images/horse.jpg' },
    { name: 'Luxury Bed', price: 5000, quantity: 0, image: 'images/luxury-bed.jpg' },
    { name: 'Smartphone', price: 1000, quantity: 0, image: 'images/smartphone.jpg' },
    { name: 'Bicycle', price: 300, quantity: 0, image: 'images/bicycle.jpg' },
    { name: 'Golf Club Membership', price: 15000, quantity: 0, image: 'images/golf-club-membership.jpg' },
    { name: 'Motorbike', price: 15000, quantity: 0, image: 'images/motorbike.jpg' },
    { name: 'Home Theater System', price: 2000, quantity: 0, image: 'images/home-theater-system.jpg' },
    { name: 'Hot Air Balloon Ride', price: 1000, quantity: 0, image: 'images/hot-air-balloon-ride.jpg' },
    { name: 'Space Travel Ticket', price: 250000, quantity: 0, image: 'images/space-travel-ticket.jpg' },
    { name: 'Luxury RV', price: 100000, quantity: 0, image: 'images/luxury-rv.jpg' },
    { name: 'Swimming Pool', price: 50000, quantity: 0, image: 'images/swimming-pool.jpg' },
    { name: 'Private Chef', price: 100000, quantity: 0, image: 'images/private-chef.jpg' },
    { name: 'Private Tutor', price: 50000, quantity: 0, image: 'images/private-tutor.jpg' },
    { name: 'Luxury Watch Collection', price: 1000000, quantity: 0, image: 'images/luxury-watch-collection.jpg' },
    { name: 'Private Zoo', price: 10000000, quantity: 0, image: 'images/private-zoo.jpg' },
    { name: 'Wine Cellar', price: 200000, quantity: 0, image: 'images/wine-cellar.jpg' },
    { name: 'Luxury Yacht Club Membership', price: 1500000, quantity: 0, image: 'images/luxury-yacht-club-membership.jpg' },
    { name: 'Exclusive Car Collection', price: 5000000, quantity: 0, image: 'images/exclusive-car-collection.jpg' },
    { name: 'Private Golf Course', price: 3000000, quantity: 0, image: 'images/private-golf-course.jpg' },
    { name: 'Ski Resort', price: 25000000, quantity: 0, image: 'images/ski-resort.jpg' },
    { name: 'Luxury Jewelry Collection', price: 8000000, quantity: 0, image: 'images/luxury-jewelry-collection.jpg' },
    { name: 'Private Art Gallery', price: 12000000, quantity: 0, image: 'images/private-art-gallery.jpg' },
    { name: 'Private Submarine', price: 3500000, quantity: 0, image: 'images/private-submarine.jpg' },
    { name: 'Space Station Module', price: 50000000, quantity: 0, image: 'images/space-station-module.jpg' }
];

// Function to update the remaining money
function updateRemainingMoney() {
    document.getElementById('remaining-money').textContent = `$${remainingMoney.toLocaleString()}`;
}

// Function to handle purchase
function purchaseItem(index) {
    const item = items[index];
    if (remainingMoney >= item.price) {
        remainingMoney -= item.price;
        item.quantity += 1;
        updateRemainingMoney();
        updateItemButtons();
        updatePurchasedItems();
    }
}

// Function to handle selling
function sellItem(index) {
    const item = items[index];
    if (item.quantity > 0) {
        remainingMoney += item.price;
        item.quantity -= 1;
        updateRemainingMoney();
        updateItemButtons();
        updatePurchasedItems();
    }
}

// Function to update item buttons based on conditions
function updateItemButtons() {
    items.forEach((item, index) => {
        const buyButton = document.getElementById(`buy-${index}`);
        const sellButton = document.getElementById(`sell-${index}`);
        
        // Disable "Buy" button if balance is insufficient
        if (remainingMoney < item.price) {
            buyButton.disabled = true;
        } else {
            buyButton.disabled = false;
        }

        // Disable "Sell" button if no items have been bought
        if (item.quantity === 0) {
            sellButton.disabled = true;
        } else {
            sellButton.disabled = false;
        }
    });
}

// Function to calculate total spending
function calculateTotalSpent() {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to render items
function renderItems() {
    const container = document.getElementById('items-container');
    container.innerHTML = ''; // Clear previous content
    items.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span class="price">${item.name} - $${item.price.toLocaleString()}</span>
            <div class="buttons">
                <button id="buy-${index}" class="buy-btn" onclick="purchaseItem(${index})">Buy</button>
                <button id="sell-${index}" class="sell-btn" onclick="sellItem(${index})">Sell</button>
            </div>
        `;
        container.appendChild(itemCard);
    });
    updateItemButtons();
}

// Function to update the purchased items list and total spending
function updatePurchasedItems() {
    const purchasedItemsList = document.getElementById('purchased-items-list');
    purchasedItemsList.innerHTML = ''; // Clear previous content
    items.forEach(item => {
        if (item.quantity > 0) {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name}: ${item.quantity} - Total: $${(item.price * item.quantity).toLocaleString()}`;
            purchasedItemsList.appendChild(listItem);
        }
    });

    // Add total spending at the end of the list
    const totalSpent = calculateTotalSpent();
    const totalListItem = document.createElement('li');
    totalListItem.style.fontWeight = 'bold';
    totalListItem.textContent = `Total Spent: $${totalSpent.toLocaleString()}`;
    purchasedItemsList.appendChild(totalListItem);
}

// Initialize the app
renderItems();
updateRemainingMoney();
