const translations = {
  es: {
    title: "Asesoría y Mejora en el Sector Oleícola",
    home_title: "Home",
    who_we_are: "Quiénes Somos",
    who_description: "Somos un equipo multidisciplinario especializado en la mejora del rendimiento y calidad del sector oleícola.",
    programs: "Programas",
    programs_description: "Ofrecemos programas de asesoría técnica adaptados a cada etapa del proceso productivo.",
    news: "Actualidades",
    news_description: "Aquí encontrarás las últimas novedades, eventos y publicaciones relevantes del sector.",
    agronomy_title: "Factores Agronómicos",
    agronomy_description: "Analizamos y optimizamos los factores agronómicos clave...",
    tech_title: "Tecnología y Proceso",
    tech_description: "Implementamos programas de seguimiento técnico...",
    contact_title: "Contacto",
    name_label: "Nombre:",
    email_label: "Correo electrónico:",
    message_label: "Mensaje:",
    submit_button: "Enviar"
  },
  fr: {
    title: "Conseil et Amélioration du Secteur Oléicole",
    home_title: "Accueil",
    who_we_are: "Qui sommes-nous",
    who_description: "Nous sommes une équipe pluridisciplinaire...",
    programs: "Programmes",
    programs_description: "Nous proposons des programmes de conseil...",
    news: "Actualités",
    news_description: "Retrouvez ici les dernières nouvelles...",
    agronomy_title: "Facteurs Agronomiques",
    agronomy_description: "Nous analysons et optimisons les facteurs clés...",
    tech_title: "Technologie et Processus",
    tech_description: "Nous mettons en place des programmes de suivi...",
    contact_title: "Contact",
    name_label: "Nom :",
    email_label: "E-mail :",
    message_label: "Message :",
    submit_button: "Envoyer"
  },
  ar: {
    title: "الاستشارة والتحسين في قطاع الزيتون",
    home_title: "الرئيسية",
    who_we_are: "من نحن",
    who_description: "نحن فريق متخصص في تحسين جودة وإنتاج زيت الزيتون.",
    programs: "البرامج",
    programs_description: "نقدم برامج استشارية فنية مخصصة...",
    news: "المستجدات",
    news_description: "آخر الأخبار والمنشورات في القطاع.",
    agronomy_title: "العوامل الزراعية",
    agronomy_description: "نقوم بتحليل وتحسين العوامل الزراعية...",
    tech_title: "التقنيات والعمليات",
    tech_description: "ننفذ برامج متابعة تقنية لضمان جودة الزيت.",
    contact_title: "اتصل بنا",
    name_label: "الاسم:",
    email_label: "البريد الإلكتروني:",
    message_label: "الرسالة:",
    submit_button: "إرسال"
  }
};

function setLanguage(lang) {
  document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  for (const key in translations[lang]) {
    const el = document.querySelector(`[data-key="${key}"]`);
    if (el) el.textContent = translations[lang][key];
  }
  document.title = translations[lang].title;
  document.getElementById("title").textContent = translations[lang].title;
}
