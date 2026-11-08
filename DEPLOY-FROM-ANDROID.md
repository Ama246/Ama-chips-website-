# Put AMA CHIPS online using only an Android phone

You do **not** need a computer and you do **not** need to type any `npm` commands. GitHub keeps your files, and Netlify builds and publishes the website for you automatically.

Your prices (Plantain and Potato: Small ₦200, Medium ₦500) and your WhatsApp number (+234 902 350 2482) are already set inside this project.

You will need: Chrome, a free **GitHub** account and a free **Netlify** account.

---

## Part A: Unzip the project on your phone

1. Download `ama-chips.zip`.
2. Open the **Files by Google** app (or your phone's file manager) and go to **Downloads**.
3. Tap `ama-chips.zip`, then tap **Extract**. You now have a folder called `ama-chips`.

Note: a hidden file called `.gitignore` may not show on your phone. You can skip it. The website works without it.

---

## Part B: Create your GitHub repository

1. Open Chrome and go to **github.com**. Sign up or sign in.
2. Tap Chrome's menu (three dots at the top right) and turn on **Desktop site**. GitHub's upload page works better this way. Pinch to zoom if the text is small.
3. Tap the **+** at the top right, then **New repository**.
4. Repository name: `ama-chips`. Choose Public or Private (both work with Netlify).
5. Do **not** tick "Add a README file". Tap **Create repository**.

---

## Part C: Upload the files (10 short rounds)

GitHub on a phone cannot upload a whole folder or open a zip file, so you upload the files folder by folder. Each round takes about a minute.

**How to pick several files at once:** on the upload page tap **choose your files**. In the file picker, go to the extracted folder, press and hold one file, then tap the others. Then tap **Select** or **Open**. Wait for all files to finish loading, scroll down and tap **Commit changes**.

### Round 1: the main folder
On your new empty repository page, tap **uploading an existing file**. Upload these files from inside `ama-chips`:

`index.html`, `package.json`, `netlify.toml`, `vite.config.js`, `postcss.config.js`, `tailwind.config.js`, `README.md`, `DEPLOY-FROM-ANDROID.md`

Tap **Commit changes**.

### Rounds 2 to 10: the folders
For each round below, type this address in Chrome, replacing `YOUR-USERNAME` with your GitHub username and `FOLDER` with the folder name from the table:

`github.com/YOUR-USERNAME/ama-chips/upload/main/FOLDER`

| Round | FOLDER | Upload these files |
|---|---|---|
| 2 | `public` | `favicon.svg`, `_redirects` |
| 3 | `public/images` | `README.txt` (your photos go here later) |
| 4 | `src` | `App.jsx`, `main.jsx`, `index.css` |
| 5 | `src/components` | `CartToast.jsx`, `Footer.jsx`, `Navbar.jsx`, `PageHeader.jsx`, `PriceNotice.jsx`, `PriceTag.jsx`, `ProductCard.jsx`, `ProductImage.jsx`, `ScrollToTop.jsx` |
| 6 | `src/config` | `siteConfig.js` |
| 7 | `src/context` | `CartContext.jsx` |
| 8 | `src/data` | `products.js` |
| 9 | `src/pages` | `About.jsx`, `Cart.jsx`, `Checkout.jsx`, `Contact.jsx`, `Home.jsx`, `NotFound.jsx`, `Shop.jsx` |
| 10 | `src/utils` | `helpers.js`, `order.js` |

**If a page says "404" or "not found" for a folder:** go to your repository page, tap **Add file**, then **Create new file**. In the name box type the folder name, a slash, and `.gitkeep` (for example `src/pages/.gitkeep`), then tap **Commit changes**. After that, open the same upload address again. The `.gitkeep` file is empty and harmless.

**Check your work:** your repository should now show `src`, `public`, `index.html`, `package.json` and `netlify.toml`. Open `src` and make sure you can see `components`, `config`, `context`, `data`, `pages`, `utils`, plus the three files `App.jsx`, `main.jsx` and `index.css`. If a file is missing, upload it using its round above.

---

## Part D: Publish with Netlify

1. In Chrome, go to **netlify.com** and sign up with your **GitHub** account (tap **Sign up with GitHub**).
2. Tap **Add new site**, then **Import an existing project**, then **Deploy with GitHub**.
3. Allow Netlify to access your repositories when GitHub asks.
4. Choose the **ama-chips** repository.
5. The settings should fill in by themselves from the project: build command `npm run build` and publish directory `dist`. If they are empty, type exactly those two.
6. Tap **Deploy**. Wait one to three minutes.
7. When it says **Published**, tap the link ending in `.netlify.app` to open your website.

**Test it on your phone:**
- Open the menu and every page.
- Add a Small plantain chips (₦200) and a Medium potato chips (₦500) to the cart. The total should be ₦700.
- Go to Checkout, fill in the form and tap **Send order on WhatsApp**. WhatsApp should open with the products, sizes, quantities and total written out, addressed to +234 902 350 2482.

**If the deploy fails:** in Netlify tap **Deploys**, tap the failed deploy, copy the log text and send it to me. I will tell you exactly what to fix.

---

## Part E: Connect your own domain (like amachips.com)

1. Buy a domain from any domain seller, using Chrome.
2. In Netlify open your site, go to **Domain management**, and tap **Add a domain**. Type your domain.
3. Netlify shows what to do. Either change your domain's nameservers to the ones Netlify gives you, or add the DNS records Netlify shows (usually an `A` record for the main domain and a `CNAME` record for `www`) in your domain seller's settings. Copy the values exactly.
4. Wait a few minutes up to a day.
5. In **Domain management**, find **HTTPS** and turn on the free certificate so the site shows the padlock.

---

## Part F: Changing things later (all from your phone)

Every change you save on GitHub updates your live website by itself in about one to two minutes.

**Change a price or product text**
1. In GitHub open your `ama-chips` repository, then `src`, then `data`, then `products.js`.
2. Tap the pencil icon (**Edit**).
3. Change only the number after `price:` (numbers only, like `500`).
4. Tap **Commit changes**.

**Add your photos**
1. Shrink each photo first so it is under about 400 KB.
2. Rename them exactly: `hero.jpg`, `plantain-chips.jpg`, `potato-chips.jpg`, `about.jpg`.
3. Go to `github.com/YOUR-USERNAME/ama-chips/upload/main/public/images`, upload them and tap **Commit changes**.

**Add email, Instagram, address, delivery info or your brand story**
Open `src/config/siteConfig.js` in GitHub, tap the pencil icon, replace the lines that say `REPLACE`, and tap **Commit changes**. Keep the quote marks `'` around each text.

---

## Still to fill in before you announce the launch

- [ ] Email, Instagram, address and delivery info (hidden or marked "Not set yet" until added)
- [ ] Your brand story (the About page shows "REPLACE" lines until you write it)
- [ ] The four photos
- [ ] A test order on your WhatsApp
- [ ] Domain connected and HTTPS on
