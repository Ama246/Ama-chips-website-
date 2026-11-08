# AMA CHIPS website

**Every Bite, Pure Happiness!**

A complete online snack shop: home page, about page, shop, working cart, checkout, WhatsApp ordering and contact page. Built with React, Vite and Tailwind CSS.

You do **not** need to understand the code to launch it. You only edit **two files** and add **four photos**.

**Using only an Android phone?** Read `DEPLOY-FROM-ANDROID.md` first. It shows how to deploy with GitHub and Netlify without running any commands. The computer steps below are optional.

---

## 1. What is inside the project

```
ama-chips/
├── index.html                  The page shell (title, fonts)
├── package.json                List of tools the site needs
├── netlify.toml                Settings for Netlify (hosting)
├── vite.config.js              Build tool settings (leave alone)
├── tailwind.config.js          Brand colours and fonts
├── postcss.config.js           Styling helper (leave alone)
├── public/
│   ├── favicon.svg             Small icon in the browser tab
│   ├── _redirects              Makes page links work on Netlify
│   └── images/                 ⭐ PUT YOUR PHOTOS HERE
│       └── README.txt          Which photo file names to use
└── src/
    ├── config/
    │   └── siteConfig.js       ⭐ EDIT: WhatsApp, email, Instagram, address, story
    ├── data/
    │   └── products.js         ⭐ EDIT: product names and PRICES
    ├── context/
    │   └── CartContext.jsx     The cart brain (add, remove, quantity, totals)
    ├── utils/
    │   ├── helpers.js          Money format, WhatsApp link, contact details
    │   └── order.js            Builds the WhatsApp order message
    ├── components/             Reusable pieces (menu, footer, product card...)
    ├── pages/                  Home, About, Shop, Cart, Checkout, Contact
    ├── App.jsx                 Connects the pages
    ├── main.jsx                Starts the website
    └── index.css               Global styles and button styles
```

The two files with ⭐ are the ones you will change.

---

## 2. Install the tools (one time only)

1. Go to **https://nodejs.org** and download the **LTS** version. Install it like any normal program.
2. To check it worked, open a terminal (see step 3) and type `node -v`. You should see a number like `v20.x.x` or higher.

## 3. Open the project in a terminal

- **Windows:** open the `ama-chips` folder, click the address bar at the top, type `cmd`, press Enter.
- **Mac:** right-click the `ama-chips` folder and choose **New Terminal at Folder**.

(If you unzipped the project, make sure you are inside the folder that contains `package.json`.)

## 4. Install and run

Type this and press Enter. It downloads the tools the site needs. It takes a minute or two and only needs doing once:

```
npm install
```

Then start the website on your own computer:

```
npm run dev
```

The terminal will show a link like `http://localhost:5173`. Open it in your browser. You are now looking at your website. It updates automatically every time you save a change.

To stop it, click the terminal and press **Ctrl + C**.

---

## 5. Set your prices

1. Open `src/data/products.js` in any text editor (Notepad works; **VS Code** is free and nicer).
2. Find each line that says `price: 0`.
3. Replace the `0` with your real price in Naira. Numbers only:

   ```js
   { id: 'small', label: 'Small', price: 1500 },   // correct
   { id: 'small', label: 'Small', price: '₦1,500' } // wrong
   ```
4. Save. The shop, cart and checkout totals update automatically.

Until a price is set, the site shows **"Price to be confirmed"** and the WhatsApp order says the total is "To be confirmed". Totals only add up once prices are set, so set them before you test the cart.

You can also change product names and descriptions in this file.

## 6. Add your WhatsApp number and contact details

Open `src/config/siteConfig.js`.

**WhatsApp number**: type it with the country code, with **no plus sign, spaces or dashes**. For Nigeria, use `234` followed by your number **without the first 0**.

Example pattern: if your number is `0801 234 5678`, write `2348012345678`.

```js
whatsappNumber: '2348012345678',
```

Then fill in `email`, `instagramHandle` (without the @), `address` and `deliveryInfo`.

Anything still saying `REPLACE` or `XXXX` is a placeholder:
- On the Contact page, unfilled items appear in dashed boxes marked "Not set yet".
- In the footer, unfilled items are hidden.
- On the Checkout page, the WhatsApp button stays switched off until a valid number is added.

## 7. Write your brand story

In `src/config/siteConfig.js`, edit the lines inside `brandStory`. Each line is one paragraph. Replace the `REPLACE WITH YOUR...` lines with your own words. You can add or remove lines.

## 8. Add your photographs

Put your photos in `public/images/` using these exact names:

| File name | Used for | Best size |
|---|---|---|
| `hero.jpg` | Big photo on the home page | 1200 × 1500 (portrait) |
| `plantain-chips.jpg` | Plantain chips product | 1200 × 900 |
| `potato-chips.jpg` | Potato chips product | 1200 × 900 |
| `about.jpg` | About page | 1200 × 900 |

Tips: keep each photo under about 400 KB so the site loads fast on phones (the free website **squoosh.app** shrinks photos). Use only photos you took or have the right to use.

Until a photo exists, the site shows a neat "Photo goes here" box, so nothing looks broken.

---

## 9. Test everything before launch

On your computer (with `npm run dev` running), try:

1. Open the menu on a narrow browser window (phone size).
2. Add products to the cart. Change quantities. Remove an item.
3. Check the total is correct.
4. Go to Checkout, fill in the form, press **Send order on WhatsApp**. WhatsApp should open with your order written out. Check the products, quantities and total.
5. Open every page: Home, About, Shop, Cart, Checkout, Contact.

---

## 10. Put the website online with Netlify

First, create the final version of the site. In the terminal:

```
npm run build
```

This makes a folder called **`dist`**. That folder is your finished website.

### Easiest way: drag and drop

1. Create a free account at **https://www.netlify.com**.
2. Go to **https://app.netlify.com/drop**.
3. Drag the **`dist`** folder onto the page.
4. In a few seconds Netlify gives you a live link ending in `.netlify.app`. Open it on your phone to check.

To update the site later: change your files, run `npm run build` again, and drag the new `dist` folder onto your site's **Deploys** page.

### Better long-term way: GitHub

If you are comfortable with GitHub, upload the project to a GitHub repository, then in Netlify choose **Add new site → Import an existing project**, pick the repository, and Netlify will use the settings in `netlify.toml` automatically. Every time you save changes to GitHub, the site updates by itself.

---

## 11. Connect your own domain name (like amachips.com)

1. **Buy a domain** from any domain seller (a `.com` or `.ng` name, for example). Prices vary, so compare a few.
2. In Netlify, open your site, then go to **Domain management** (in site settings) and choose **Add a domain**. Type your domain name.
3. Netlify now shows you what to do. There are two ways:
   - **Use Netlify DNS (simplest):** Netlify gives you nameserver addresses. Log in to where you bought the domain and replace the nameservers with the ones Netlify shows.
   - **Keep your domain seller's DNS:** at your domain seller, add the DNS records Netlify shows you (usually an `A` record for the main domain and a `CNAME` record for `www`). Copy the values exactly as Netlify displays them.
4. Wait. Changes can take from a few minutes to a day to spread.
5. In Netlify's **Domain management** page, find **HTTPS** and turn on the free certificate. This gives your site the padlock.

---

## 12. Before you announce your launch

- [ ] All four prices set in `src/data/products.js`
- [ ] WhatsApp number added, and a test order received on that number
- [ ] Email, Instagram and address added (or you are happy for them to stay hidden)
- [ ] Brand story written
- [ ] All four photos added
- [ ] Tested on a real phone
- [ ] Domain connected and HTTPS on

## Common problems

- **`npm` is not recognised:** Node.js is not installed or the terminal was open before you installed it. Install Node, close the terminal, open a new one.
- **A white page appears:** look at the terminal where `npm run dev` is running. It shows the error, usually a missing comma or quote in a file you edited.
- **WhatsApp button is greyed out on Checkout:** the number in `siteConfig.js` is missing or not in the right format (digits only, with country code).
- **A page shows "Not found" after refreshing on Netlify:** make sure the `public/_redirects` file is still in the project, then build and upload again.
- **My cart still shows old items:** the cart is saved in the visitor's browser. Use **Empty cart** on the Cart page.
