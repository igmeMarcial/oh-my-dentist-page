# Oh My Dentist Perú - Official Website

![Oh My Dentist Perú Logo](src/img/static/news/logo2.png)

This is the official website for **Oh My Dentist Perú**, a modern and professional dental clinic located in Chorrillos, Lima. This project was built with React to provide a fast, responsive, and user-friendly experience for current and prospective patients.

**Live Site:** [www.ohmydentistperu.com](https://www.ohmydentistperu.com) <!-- Replace with your actual domain -->

---

## 🚀 Features

- **Fully Responsive Design:** A seamless experience across all devices, from mobile phones to desktop monitors.
- **Modern UI/UX:** Clean, professional, and intuitive interface designed to build trust and guide users to take action.
- **Dynamic SEO:** Integrated `react-helmet-async` for unique, SEO-friendly titles and meta descriptions on every page, boosting search engine visibility.
- **Interactive Components:** Engaging user experience with smooth animations, carousels for testimonials, and interactive service cards.
- **Contact & Appointment Form:** A fully functional contact form integrated with **EmailJS** to send appointment requests directly to the clinic.
- **Detailed Services Pages:** Clear and attractive presentation of all dental treatments offered.
- **Embedded Google Maps:** Easy-to-find location for the clinic.

---

## 🛠️ Tech Stack

This project was built using a modern frontend stack:

- **[React.js](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[React Router](https://reactrouter.com/)**: For declarative routing in the single-page application.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)**: To manage document head changes for SEO.
- **[EmailJS](https://www.emailjs.com/)**: For sending emails directly from the client-side without a backend server.
- **[Swiper.js](https://swiperjs.com/)**: For creating modern, touch-friendly carousels (used for testimonials).
- **[React Icons](https://react-icons.github.io/react-icons/)**: For including popular, high-quality icons.

---

## 📸 Screenshots

<!-- It's highly recommended to add screenshots of your site! You can upload them to your repo and link them here. -->
<!-- Example: -->
<!--
**Home Page**
![Home Page Screenshot](link-to-your-homepage-screenshot.png)

**Services Page**
![Services Page Screenshot](link-to-your-services-page-screenshot.png)

**Contact Page**
![Contact Page Screenshot](link-to-your-contact-page-screenshot.png)
-->

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later recommended)
- `npm` or `yarn`

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/oh-my-dentist-peru.git
    cd oh-my-dentist-peru
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

### Environment Variables

The contact form uses EmailJS to function. You will need to create an `.env` file in the root of the project and add your EmailJS credentials.

1.  Create a file named `.env` in the project root:

    ```
    touch .env
    ```

2.  Add your EmailJS keys to the `.env` file. You can find these in your EmailJS account dashboard under "Email Services" and "Account".
    ```env
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    _Note: If you've hardcoded these values in your `Contacto.js` file, you can skip this step. However, using an `.env` file is the recommended and more secure practice._
