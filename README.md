<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F2027,50:203A43,100:2C5364&height=220&section=header&text=⛅%20Weather%20App&fontSize=58&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Real-Time%20Weather%20at%20Your%20Fingertips%20—%20Built%20with%20React%20%26%20Vite&descAlignY=62&descSize=17" width="100%"/>

<!-- Badges Row 1 -->
<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-⚡%20Fast-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

<!-- Badges Row 2 -->
<p align="center">
  <img src="https://img.shields.io/badge/OpenWeather-API%20Powered-EB6E4B?style=for-the-badge&logo=openstreetmap&logoColor=white"/>
  <img src="https://img.shields.io/badge/ESLint-Linted-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/HMR-Enabled-00C853?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Status-Active-27AE60?style=for-the-badge"/>
</p>

<br/>

> **🌤️ A sleek, real-time weather application built with React and Vite. Search any city in the world and get instant weather data — temperature, humidity, wind speed, and more — powered by the OpenWeatherMap API.**

<br/>

<!-- Quick Nav Links -->
<p>
  <a href="#-features">✨ Features</a> &nbsp;•&nbsp;
  <a href="#%EF%B8%8F-tech-stack">🛠️ Tech Stack</a> &nbsp;•&nbsp;
  <a href="#%EF%B8%8F-getting-started">⚙️ Getting Started</a> &nbsp;•&nbsp;
  <a href="#-api-setup">🔑 API Setup</a> &nbsp;•&nbsp;
  <a href="#-project-structure">📁 Structure</a> &nbsp;•&nbsp;
  <a href="#-contributing">🤝 Contributing</a>
</p>

</div>

---

## ✨ Features

<div align="center">

| Feature | Description |
|:---:|:---|
| 🔍 **City Search** | Search real-time weather for any city worldwide |
| 🌡️ **Temperature Display** | Current temperature with feels-like reading |
| 💧 **Humidity & Wind** | Detailed humidity percentage and wind speed data |
| ☁️ **Weather Conditions** | Live weather status with descriptive icons |
| ⚡ **Lightning Fast** | Powered by Vite for near-instant load times |
| 🔄 **Hot Module Reload** | Instant updates during development — no full page refresh |
| 📱 **Responsive Design** | Clean, adaptive layout for desktop and mobile |
| 🎨 **Custom CSS Styling** | Hand-crafted styles for a polished, modern look |

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|:---:|:---:|:---|
| ⚛️ **Frontend** | React 18 | Component-based UI & state management |
| ⚡ **Build Tool** | Vite | Ultra-fast bundler with HMR |
| 🎨 **Styling** | CSS3 | Custom responsive styling |
| 🌐 **API** | OpenWeatherMap | Live global weather data |
| 🔧 **Linting** | ESLint | Code quality & consistency |
| 📦 **Package Manager** | npm | Dependency management |

</div>

---

## ⚙️ Getting Started

### Prerequisites

Before running this project, make sure you have:

- **Node.js** `>= 16.0.0` — [Download Node.js](https://nodejs.org/)
- **npm** `>= 7.0.0` — comes with Node.js
- An **OpenWeatherMap API Key** — [Get one free here](https://openweathermap.org/api)

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/Ajit-programmer/Weather.git
cd Weather
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Configure Environment Variables

Create a `.env` file in the root of the project:

```bash
touch .env
```

Add your OpenWeatherMap API key inside the `.env` file:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

> ⚠️ **Important:** Never commit your `.env` file. It's already listed in `.gitignore` to keep your API key safe.

### Step 4 — Start the Development Server 🚀

```bash
npm run dev
```

The app will be live at **[http://localhost:5173](http://localhost:5173)**

---

### Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🔑 API Setup

This app uses the **OpenWeatherMap API** (free tier) to fetch real-time weather data.

```
1. Visit → https://openweathermap.org/api
2. Sign up for a free account
3. Navigate to "API Keys" in your dashboard
4. Copy your API key
5. Paste it into your .env file as VITE_WEATHER_API_KEY
```

> 🕐 **Note:** New API keys may take up to 2 hours to activate after registration.

---

## 📁 Project Structure

```
Weather/
│
├── 📁 public/               # Static assets (favicon, icons)
│
├── 📁 src/                  # Main source code
│   ├── 📁 components/       # Reusable React components
│   ├── 📁 assets/           # Images, icons, and media
│   ├── 📄 App.jsx           # Root application component
│   ├── 📄 App.css           # Global styles
│   └── 📄 main.jsx          # React entry point
│
├── 📄 index.html            # HTML entry point
├── 📄 vite.config.js        # Vite configuration
├── 📄 eslint.config.js      # ESLint rules
├── 📄 package.json          # Project metadata & dependencies
├── 📄 .gitignore            # Files ignored by Git
└── 📄 README.md             # Project documentation
```

---

## 🗺️ Roadmap

- [ ] 🌍 Auto-detect user location via Geolocation API
- [ ] 📅 5-day / 7-day weather forecast view
- [ ] 🌙 Dark mode / Light mode toggle
- [ ] 🌡️ Toggle between Celsius and Fahrenheit
- [ ] 📊 Weather charts (temperature trends over time)
- [ ] 💨 Air quality index (AQI) display
- [ ] 🔖 Save favourite cities for quick access
- [ ] 📱 Progressive Web App (PWA) support

---

## 🤝 Contributing

Contributions are always welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "Add: amazing feature"`
4. **Push** to your branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

Please make sure your code passes ESLint checks before submitting:

```bash
npm run lint
```

---

## 🐛 Found a Bug?

If you encounter a bug or have a feature request, please [open an issue](https://github.com/Ajit-programmer/Weather/issues) with a clear description and steps to reproduce.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### ⭐ If this project helped you, give it a star — it means a lot!

<br/>

**Made with ☀️ by [Ajit-programmer](https://github.com/Ajit-programmer)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2C5364,50:203A43,100:0F2027&height=120&section=footer" width="100%"/>

</div>
