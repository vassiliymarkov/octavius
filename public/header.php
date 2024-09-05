<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="L'association " Octavius réunit cinq musiciens jouant dans différents styles
        musicaux tels que la musique classique, le jazz et la musique tzigane>
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://www.8octavius8.fr/about.php">
    <meta property="og:title" content="<?php echo isset($pageTitle) ? htmlspecialchars($pageTitle) : 'Octavius'; ?>">
    <meta property="og:description"
        content="Octavius réunit cinq musiciens jouant dans différents styles musicaux tels que la musique classique, le jazz et la musique tzigane">
    <meta property="og:image" content="https://www.example.com/image.jpg">
    <meta property="og:url" content="https://www.example.com/page-url">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Title of the Page",
      "description": "Octavius réunit cinq musiciens jouant dans différents styles musicaux tels que la musique classique, le jazz et la musique tzigane",
      "url": "https://www.8octavius8.fr/"
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dynalight&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">

    <link rel="stylesheet" href="../assets/css/style.css">
    <title><?php echo isset($pageTitle) ? htmlspecialchars($pageTitle) : 'Octavius'; ?></title>
</head>

<body>

    <div class="container">
        <header class="header">
            <div class="logo">
                <a href="index.php" class="menuLink" id="logo">Octavius</a>
            </div>
            <menu>
                <div class="menuContainer">
                    <div class="upperMenu menu">
                        <div class="menuIcon">
                            <span></span>
                        </div>
                        <nav class="menuBody">
                            <ul class="menuList">
                                <li><a href="about.php" class="menuLink">Qui sommes nous ?</a></li>
                                <li><a href="gallery.php" class="menuLink">Galerie</a></li>
                                <li><a href="#" class="menuLink">Videos</a>
                                    <span class="menuArrow"></span>
                                    <ul class="menuSubList">
                                        <li>
                                            <a href="classic.php" class="menuSubLink">Classique</a>
                                        </li>
                                        <li>
                                            <a href="jazz.php" class="menuSubLink">Jazz</a>
                                        </li>
                                        <li>
                                            <a href="tzigane.php" class="menuSubLink">Tzigane</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="press.php" class="menuLink">Press</a></li>
                                <li><a href="contact.php" class="menuLink">Contactez-nous</a></li>
                                <li><a href="contact.php" class="menuLink" id="affiche">Affiche</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </menu>
        </header>