<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E GAMING STORE | Centro Oficial de Recargas</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --bg-dark: #070a13;
            --bg-card: #0f1626;
            --blue-neon: #00d2ff;
            --blue-electric: #0052d4;
            --blue-dark: #0a1128;
            --text-main: #ffffff;
            --text-muted: #8ea0bc;
            --glow-blue: rgba(0, 210, 255, 0.35);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, sans-serif; }

        body {
            background-color: var(--bg-dark);
            background-image: 
                radial-gradient(circle at 50% 0%, rgba(0, 82, 212, 0.25) 0%, transparent 60%),
                radial-gradient(circle at 100% 100%, rgba(0, 210, 255, 0.1) 0%, transparent 40%);
            color: var(--text-main);
            min-height: 100vh;
            line-height: 1.5;
        }

        .top-bar {
            background: linear-gradient(90deg, #001f3f, #0052d4);
            border-bottom: 1px solid var(--blue-neon);
            padding: 8px 30px;
            font-size: 0.85rem;
            font-weight: 700;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }

        .top-bar-links { display: flex; gap: 15px; }
        .top-link {
            color: #fff; text-decoration: none; padding: 2px 10px;
            border-radius: 12px; background: rgba(255, 255, 255, 0.1);
            font-size: 0.8rem; transition: all 0.2s ease;
        }
        .top-link.wa:hover { background: #25D366; color: #000; }
        .top-link.tt:hover { background: #ff0050; color: #fff; }

        .navbar {
            background: rgba(10, 17, 40, 0.85);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(0, 210, 255, 0.2);
            padding: 12px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky; top: 0; z-index: 1000;
        }

        .nav-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-logo-img { height: 42px; width: auto; border-radius: 8px; box-shadow: 0 0 10px var(--glow-blue); }
        .nav-brand-text { font-size: 1.25rem; font-weight: 900; color: #ffffff; letter-spacing: 0.5px; line-height: 1; }
        .nav-brand-text span { color: var(--blue-neon); text-shadow: 0 0 10px var(--glow-blue); }

        .nav-search { position: relative; width: 38%; max-width: 450px; }
        .nav-search input {
            width: 100%; background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 210, 255, 0.3); border-radius: 20px;
            padding: 9px 16px 9px 42px; color: #ffffff; font-size: 0.88rem; outline: none; transition: all 0.3s ease;
        }
        .nav-search input:focus { border-color: var(--blue-neon); box-shadow: 0 0 15px var(--glow-blue); }
        .search-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--blue-neon); }

        .search-suggestions {
            position: absolute; top: 105%; left: 0; width: 100%;
            background: var(--bg-card); border: 1px solid var(--blue-neon);
            border-radius: 12px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
            max-height: 280px; overflow-y: auto; z-index: 9999; display: none;
        }

        .suggestion-item {
            padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;
            color: #ffffff; text-decoration: none; font-size: 0.85rem; font-weight: 600;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05); transition: background 0.2s ease;
        }
        .suggestion-item:hover { background: rgba(0, 210, 255, 0.15); color: var(--blue-neon); }
        .suggestion-left { display: flex; align-items: center; gap: 12px; }
        .suggestion-thumb { width: 38px; height: 38px; border-radius: 8px; object-fit: cover; border: 1px solid rgba(0, 210, 255, 0.3); background: #101828; }
        .suggestion-item i { color: var(--blue-neon); font-size: 0.75rem; }

        .btn-login {
            background: linear-gradient(135deg, var(--blue-neon), var(--blue-electric));
            border: none; color: #ffffff; padding: 9px 24px; border-radius: 20px;
            font-size: 0.85rem; font-weight: 800; cursor: pointer;
            box-shadow: 0 0 12px var(--glow-blue); transition: all 0.2s ease;
        }
        .btn-login:hover { transform: scale(1.03); }

        .user-profile-menu { position: relative; display: none; }
        .user-pill {
            display: flex; align-items: center; gap: 10px;
            background: rgba(255, 255, 255, 0.08); border: 1px solid var(--blue-neon);
            padding: 5px 14px 5px 6px; border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
        }
        .user-pill:hover { box-shadow: 0 0 12px var(--glow-blue); }
        .user-avatar-mini {
            width: 32px; height: 32px; border-radius: 50%; background: var(--blue-electric);
            display: flex; align-items: center; justify-content: center; font-weight: 800; color: #fff; font-size: 0.85rem;
        }
        .user-name-mini { font-size: 0.85rem; font-weight: 700; color: #fff; }

        .profile-dropdown {
            position: absolute; top: 120%; right: 0; width: 220px;
            background: var(--bg-card); border: 1px solid var(--blue-neon);
            border-radius: 14px; box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            padding: 10px 0; display: none; z-index: 9999;
        }
        .profile-dropdown.active { display: block; }
        .dropdown-item {
            padding: 10px 18px; display: flex; align-items: center; gap: 10px;
            color: var(--text-main); text-decoration: none; font-size: 0.85rem; font-weight: 600;
            cursor: pointer; transition: background 0.2s ease;
        }
        .dropdown-item:hover { background: rgba(0, 210, 255, 0.15); color: var(--blue-neon); }
        .dropdown-divider { height: 1px; background: rgba(255, 255, 255, 0.1); margin: 6px 0; }

        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(4, 7, 14, 0.85); backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; z-index: 10000;
            opacity: 0; visibility: hidden; transition: all 0.3s ease; padding: 20px;
        }
        .modal-overlay.active { opacity: 1; visibility: visible; }

        .modal-card-gamer {
            background: var(--bg-card); border: 1px solid rgba(0, 210, 255, 0.3);
            border-radius: 24px; width: 100%; max-width: 820px; display: flex;
            overflow: hidden; box-shadow: 0 0 50px rgba(0, 210, 255, 0.15); position: relative;
        }

        .modal-side-banner {
            flex: 0.95;
            background: linear-gradient(135deg, rgba(0, 82, 212, 0.85), rgba(10, 17, 40, 0.95)), 
                        url('img/mascota.png') center/cover no-repeat;
            padding: 40px 30px; display: flex; flex-direction: column; justify-content: space-between;
            position: relative; border-right: 1px solid rgba(0, 210, 255, 0.15);
        }

        .modal-brand-header { display: flex; align-items: center; gap: 12px; z-index: 2; }
        .modal-brand-logo { height: 42px; width: auto; border-radius: 8px; box-shadow: 0 0 12px var(--glow-blue); }
        .modal-brand-name { font-size: 1.2rem; font-weight: 900; color: #ffffff; }
        .modal-brand-name span { color: var(--blue-neon); }

        .banner-content { z-index: 2; margin-top: 20px; }
        .banner-title { font-size: 1.7rem; font-weight: 900; margin-bottom: 10px; color: #fff; }
        .banner-desc { font-size: 0.85rem; color: var(--text-muted); }

        .banner-features { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
        .feature-item {
            display: flex; align-items: center; gap: 10px; font-size: 0.8rem; color: #fff;
            background: rgba(255, 255, 255, 0.05); padding: 8px 12px; border-radius: 10px;
            border: 1px solid rgba(0, 210, 255, 0.15);
        }
        .feature-item i { color: var(--blue-neon); }

        .mobile-modal-brand { display: none; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; }
        .mobile-modal-brand img { height: 35px; border-radius: 6px; }
        .mobile-modal-brand span { font-size: 1.1rem; font-weight: 900; color: #fff; }
        .mobile-modal-brand span span { color: var(--blue-neon); }

        .modal-form-side { flex: 1.1; padding: 35px 30px; position: relative; background: #0b1120; }

        .close-modal-btn {
            position: absolute; top: 20px; right: 20px; width: 32px; height: 32px;
            background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            color: var(--text-muted); cursor: pointer; transition: all 0.2s; z-index: 5;
        }
        .close-modal-btn:hover { background: rgba(255, 75, 67, 0.2); border-color: #ff4b43; color: #ff4b43; }

        .auth-tabs-container {
            display: flex; background: rgba(255, 255, 255, 0.03); padding: 4px;
            border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 25px;
        }
        .auth-tab-btn {
            flex: 1; background: transparent; border: none; color: var(--text-muted);
            padding: 10px; font-size: 0.85rem; font-weight: 800; border-radius: 10px; cursor: pointer;
        }
        .auth-tab-btn.active {
            background: linear-gradient(135deg, var(--blue-neon), var(--blue-electric));
            color: #fff; box-shadow: 0 0 15px var(--glow-blue);
        }

        .input-field-group { margin-bottom: 16px; }
        .input-field-group label { display: block; font-size: 0.75rem; font-weight: 800; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; }
        .input-wrapper { position: relative; display: flex; align-items: center; }
        .input-wrapper i.icon-prefix { position: absolute; left: 14px; color: var(--text-muted); font-size: 0.9rem; }
        .input-wrapper input {
            width: 100%; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(0, 210, 255, 0.2);
            border-radius: 12px; padding: 11px 40px 11px 40px; color: #fff; font-size: 0.88rem; outline: none;
        }
        .input-wrapper input:focus { border-color: var(--blue-neon); box-shadow: 0 0 15px var(--glow-blue); }
        .toggle-password { position: absolute; right: 14px; color: var(--text-muted); cursor: pointer; }

        .checkbox-container { display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: var(--text-muted); margin-top: 10px; cursor: pointer; }

        .btn-gamer-submit {
            width: 100%; background: linear-gradient(135deg, var(--blue-neon), var(--blue-electric));
            border: none; color: #ffffff; padding: 13px; border-radius: 12px; font-size: 0.9rem;
            font-weight: 900; cursor: pointer; margin-top: 18px; box-shadow: 0 0 20px rgba(0, 210, 255, 0.35);
            display: flex; align-items: center; justify-content: center; gap: 8px;
        }

        .modal-box {
            background: var(--bg-card); border: 1px solid var(--blue-neon); border-radius: 20px;
            padding: 30px; width: 100%; max-width: 420px; position: relative;
        }

        .hero { padding: 30px 20px 50px 20px; display: flex; justify-content: center; }
        .hero-container {
            max-width: 1150px; width: 100%; background: linear-gradient(135deg, rgba(15, 22, 38, 0.95), rgba(7, 10, 19, 0.9));
            border: 1px solid rgba(0, 210, 255, 0.3); border-radius: 24px; padding: 45px;
            display: flex; align-items: center; justify-content: space-between; gap: 40px;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.7); position: relative; overflow: hidden;
        }

        .hero-text { flex: 1.2; z-index: 2; }
        .hero-top-tags { display: flex; gap: 10px; align-items: center; margin-bottom: 15px; }
        .hero-badge { background: rgba(0, 210, 255, 0.1); border: 1px solid var(--blue-neon); color: var(--blue-neon); padding: 5px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; }
        .hero-badge-fire { background: rgba(255, 75, 43, 0.15); border: 1px solid #ff4b2b; color: #ff4b2b; padding: 5px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; }

        .hero-title {
            font-size: 3.4rem; font-weight: 900; line-height: 1.05; margin-bottom: 15px;
            background: linear-gradient(135deg, #ffffff 30%, var(--blue-neon));
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-desc { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 25px; max-width: 520px; }

        .hero-cta-group { display: flex; gap: 15px; align-items: center; margin-bottom: 30px; flex-wrap: wrap; }
        .btn-primary-glow {
            background: linear-gradient(135deg, var(--blue-neon), var(--blue-electric));
            border: none; color: #ffffff; padding: 14px 32px; border-radius: 30px;
            font-size: 0.95rem; font-weight: 800; cursor: pointer; box-shadow: 0 0 20px rgba(0, 210, 255, 0.4);
            text-decoration: none; display: inline-flex; align-items: center; gap: 10px;
        }
        .btn-secondary-outline {
            background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(0, 210, 255, 0.3);
            color: #ffffff; padding: 13px 25px; border-radius: 30px; font-size: 0.9rem; font-weight: 700;
            text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
        }

        .hero-mascot-wrapper { position: relative; flex: 0.9; display: flex; justify-content: center; align-items: center; }
        .hero-mascot { position: relative; z-index: 2; width: 290px; height: auto; mix-blend-mode: screen; animation: float 4s ease-in-out infinite; }

        .floating-badge {
            position: absolute; background: rgba(15, 22, 38, 0.9); border: 1px solid var(--blue-neon);
            padding: 10px 16px; border-radius: 16px; display: flex; align-items: center; gap: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); z-index: 3; backdrop-filter: blur(8px);
            font-size: 0.8rem; font-weight: 700; animation: floatBadge 5s ease-in-out infinite;
        }
        .floating-badge-top { top: 20px; right: -10px; }
        .floating-badge-bottom { bottom: 20px; left: -10px; animation-delay: 2.5s; }
        .floating-badge i { color: var(--blue-neon); font-size: 1.1rem; }

        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes floatBadge { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }

        .community-section { max-width: 1100px; margin: 40px auto; padding: 0 20px; }
        .section-title { font-size: 1.3rem; font-weight: 800; color: #ffffff; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .section-title::before { content: ''; width: 4px; height: 20px; background: var(--blue-neon); border-radius: 2px; }

        .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .info-card {
            background: var(--bg-card); border: 1px solid rgba(0, 210, 255, 0.15); border-radius: 16px;
            padding: 20px; display: flex; align-items: center; gap: 18px; transition: all 0.3s ease; text-decoration: none; color: #fff;
        }
        .info-card:hover { border-color: var(--blue-neon); transform: translateY(-4px); box-shadow: 0 8px 25px var(--glow-blue); }

        .card-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0; }
        .wa-icon { color: #25D366; border: 1px solid #25D366; background: rgba(37, 211, 102, 0.1); }
        .tt-icon { color: #ff0050; border: 1px solid #ff0050; background: rgba(255, 0, 80, 0.1); }
        .sp-icon { color: var(--blue-neon); border: 1px solid var(--blue-neon); background: rgba(0, 210, 255, 0.1); }

        .card-content h3 { font-size: 0.95rem; font-weight: 800; }
        .card-content p { font-size: 0.8rem; color: var(--text-muted); margin-top: 2px; }
        .btn-card-link { display: inline-block; margin-top: 10px; font-size: 0.8rem; font-weight: 800; color: var(--blue-neon); }

        .games-section { max-width: 1100px; margin: 40px auto 80px auto; padding: 0 20px; }
        .games-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
        .game-card {
            background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px;
            overflow: hidden; text-decoration: none; color: #ffffff; transition: all 0.3s ease; display: block;
        }
        .game-card:hover { border-color: var(--blue-neon); transform: translateY(-6px); box-shadow: 0 10px 25px var(--glow-blue); }

        .game-thumb { width: 100%; height: 150px; position: relative; background: #101828; }
        .game-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .badge-status { position: absolute; top: 10px; left: 10px; background: var(--blue-neon); color: #000; padding: 3px 8px; border-radius: 6px; font-size: 0.65rem; font-weight: 900; }

        .game-info { padding: 14px; display: flex; justify-content: space-between; align-items: center; }
        .game-info h4 { font-size: 0.9rem; font-weight: 800; }
        .arrow-btn { color: var(--blue-neon); font-weight: bold; }

        footer { background: #04070e; border-top: 1px solid rgba(0, 210, 255, 0.2); padding: 40px 20px; text-align: center; font-size: 0.85rem; color: var(--text-muted); }

        @media (max-width: 768px) {
            .modal-side-banner { display: none; }
            .modal-card-gamer { max-width: 440px; }
            .modal-form-side { padding: 30px 20px; }
            .mobile-modal-brand { display: flex; }
        }
    </style>
</head>
<body>

    <!-- Top Bar -->
    <div class="top-bar">
        <span>⚡ ¡Recargas instantáneas las 24 horas del día!</span>
        <div class="top-bar-links">
            <a href="https://whatsapp.com/channel/TU_CANAL_AQUI" target="_blank" class="top-link wa"><i class="fa-brands fa-whatsapp"></i> Canal WhatsApp</a>
            <a href="https://tiktok.com/@TU_USUARIO_TIKTOK" target="_blank" class="top-link tt"><i class="fa-brands fa-tiktok"></i> TikTok</a>
        </div>
    </div>

    <!-- Navbar -->
    <header class="navbar">
        <a href="index.html" class="nav-brand">
            <img src="img/logo.png" alt="E Gaming Logo" class="nav-logo-img">
            <span class="nav-brand-text">E GAMING <span>STORE</span></span>
        </a>

        <div class="nav-search">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" id="searchInput" placeholder="Buscar juego, tarjeta de regalo..." oninput="filtrarJuegosDirecto()" autocomplete="off">
            <div id="searchSuggestions" class="search-suggestions"></div>
        </div>

        <div class="nav-actions">
            <button class="btn-login" id="btnLoginTrigger" onclick="openAuthModal()"><i class="fa-solid fa-user-astronaut"></i> Ingresar</button>

            <div class="user-profile-menu" id="userProfileMenu">
                <div class="user-pill" onclick="toggleDropdown()">
                    <div class="user-avatar-mini" id="navAvatar">U</div>
                    <span class="user-name-mini" id="navUsername">Usuario</span>
                    <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem; color: var(--blue-neon);"></i>
                </div>
                <div class="profile-dropdown" id="profileDropdown">
                    <div class="dropdown-item" onclick="openProfileModal()">
                        <i class="fa-solid fa-id-card"></i> Mi Perfil
                    </div>
                    <div class="dropdown-item" onclick="alert('Historial de Compras en desarrollo')">
                        <i class="fa-solid fa-receipt"></i> Mis Compras
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-item" onclick="logoutUser()" style="color: #ff4b2b;">
                        <i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Modal Autenticación Gamer Pro -->
    <div class="modal-overlay" id="authModal">
        <div class="modal-card-gamer">
            <div class="close-modal-btn" onclick="closeAuthModal()">
                <i class="fa-solid fa-xmark"></i>
            </div>

            <div class="modal-side-banner">
                <div class="modal-brand-header">
                    <img src="img/logo.png" alt="E Gaming Logo" class="modal-brand-logo">
                    <div class="modal-brand-name">E GAMING <span>STORE</span></div>
                </div>

                <div class="banner-content">
                    <h3 class="banner-title">ÚNETE A LA ÉLITE GAMER</h3>
                    <p class="banner-desc">Crea tu cuenta para acceder a promociones exclusivas, acumular historial y recargar en segundos.</p>
                    
                    <div class="banner-features">
                        <div class="feature-item">
                            <i class="fa-solid fa-bolt-lightning"></i>
                            <span>Entregas automatizadas e inmediatas</span>
                        </div>
                        <div class="feature-item">
                            <i class="fa-solid fa-shield-halved"></i>
                            <span>Garantía y soporte prioritario 24/7</span>
                        </div>
                    </div>
                </div>

                <div style="font-size: 0.72rem; color: rgba(255,255,255,0.4); z-index: 2;">
                    E Gaming Store © 2026
                </div>
            </div>

            <div class="modal-form-side">
                <div class="mobile-modal-brand">
                    <img src="img/logo.png" alt="Logo">
                    <span>E GAMING <span>STORE</span></span>
                </div>

                <div class="auth-tabs-container">
                    <button class="auth-tab-btn active" id="tabLoginBtn" onclick="switchAuthTab('login')">
                        <i class="fa-solid fa-right-to-bracket"></i> INGRESAR
                    </button>
                    <button class="auth-tab-btn" id="tabRegisterBtn" onclick="switchAuthTab('register')">
                        <i class="fa-solid fa-user-plus"></i> REGISTRO
                    </button>
                </div>

                <form id="loginForm" onsubmit="handleLogin(event)">
                    <div class="input-field-group">
                        <label>Correo Electrónico</label>
                        <div class="input-wrapper">
                            <i class="fa-solid fa-envelope icon-prefix"></i>
                            <input type="email" id="loginEmail" placeholder="ejemplo@gamer.com" required>
                        </div>
                    </div>

                    <div class="input-field-group">
                        <label>Contraseña</label>
                        <div class="input-wrapper">
                            <i class="fa-solid fa-lock icon-prefix"></i>
                            <input type="password" id="loginPassword" placeholder="••••••••" required>
                            <i class="fa-solid fa-eye toggle-password" onclick="togglePasswordVisibility('loginPassword', this)"></i>
                        </div>
                    </div>

                    <label class="checkbox-container">
                        <input type="checkbox" checked> Recordar mi sesión
                    </label>

                    <button type="submit" class="btn-gamer-submit">
                        ENTRAR A MI CUENTA <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </form>

                <form id="registerForm" style="display: none;" onsubmit="handleRegister(event)">
                    <div class="input-field-group">
                        <label>Usuario / Gamertag</label>
                        <div class="input-wrapper">
                            <i class="fa-solid fa-user-astronaut icon-prefix"></i>
                            <input type="text" id="regName" placeholder="Ej: SharkGamer99" required>
                        </div>
                    </div>

                    <div class="input-field-group">
                        <label>Correo Electrónico</label>
                        <div class="input-wrapper">
                            <i class="fa-solid fa-envelope icon-prefix"></i>
                            <input type="email" id="regEmail" placeholder="tu@email.com" required>
                        </div>
                    </div>

                    <div class="input-field-group">
                        <label>Teléfono (WhatsApp)</label>
                        <div class="input-wrapper">
                            <i class="fa-brands fa-whatsapp icon-prefix"></i>
                            <input type="tel" id="regPhone" placeholder="+58 412 0000000" required>
                        </div>
                    </div>

                    <div class="input-field-group">
                        <label>Contraseña</label>
                        <div class="input-wrapper">
                            <i class="fa-solid fa-lock icon-prefix"></i>
                            <input type="password" id="regPassword" placeholder="Crea una contraseña segura" required>
                            <i class="fa-solid fa-eye toggle-password" onclick="togglePasswordVisibility('regPassword', this)"></i>
                        </div>
                    </div>

                    <label class="checkbox-container">
                        <input type="checkbox" required> Acepto los términos y servicio oficial
                    </label>

                    <button type="submit" class="btn-gamer-submit">
                        CREAR MI CUENTA <i class="fa-solid fa-bolt"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal Perfil -->
    <div class="modal-overlay" id="profileModal">
        <div class="modal-box">
            <i class="fa-solid fa-xmark close-modal-btn" onclick="closeProfileModal()"></i>
            <h3 style="margin-bottom: 20px; color: var(--blue-neon); font-size: 1.2rem;">
                <i class="fa-solid fa-user-gear"></i> Perfil de Usuario
            </h3>

            <div style="text-align: center; margin-bottom: 20px;">
                <div class="user-avatar-mini" id="modalAvatar" style="width: 60px; height: 60px; font-size: 1.5rem; margin: 0 auto 10px auto;">U</div>
                <h4 id="profileDisplayName" style="font-size: 1.1rem;">Nombre Usuario</h4>
                <span id="profileDisplayEmail" style="font-size: 0.8rem; color: var(--text-muted);">correo@email.com</span>
            </div>

            <div class="input-field-group">
                <label>ID de Cliente</label>
                <div class="input-wrapper">
                    <input type="text" id="profileClientID" readonly style="background: rgba(0,0,0,0.3); opacity: 0.7; padding-left: 15px;">
                </div>
            </div>
            <div class="input-field-group">
                <label>Número de WhatsApp</label>
                <div class="input-wrapper">
                    <input type="text" id="profilePhone" readonly style="background: rgba(0,0,0,0.3); opacity: 0.7; padding-left: 15px;">
                </div>
            </div>

            <button class="btn-gamer-submit" onclick="closeProfileModal()" style="background: rgba(255,255,255,0.1); box-shadow: none;">Cerrar</button>
        </div>
    </div>

    <!-- Hero Banner -->
    <section class="hero">
        <div class="hero-container">
            <div class="hero-text">
                <div class="hero-top-tags">
                    <span class="hero-badge"><i class="fa-solid fa-bolt"></i> PLATAFORMA OFICIAL</span>
                    <span class="hero-badge-fire"><i class="fa-solid fa-fire"></i> OFERTAS ACTIVAS</span>
                </div>

                <h1 class="hero-title">E GAMING STORE</h1>
                <p class="hero-desc">El centro de recargas #1. Procesa tus cargas de Diamantes, Pases e Ítems en segundos con verificación inmediata y tasa preferencial.</p>

                <div class="hero-cta-group">
                    <a href="#catalogo" class="btn-primary-glow">
                        <i class="fa-solid fa-gamepad"></i> RECARGAR AHORA
                    </a>
                    <a href="https://whatsapp.com/channel/TU_CANAL_AQUI" target="_blank" class="btn-secondary-outline">
                        <i class="fa-brands fa-whatsapp"></i> CANAL OFICIAL
                    </a>
                </div>
            </div>

            <div class="hero-mascot-wrapper">
                <div class="floating-badge floating-badge-top">
                    <i class="fa-solid fa-bolt-lightning"></i>
                    <div>
                        <div style="color: #fff;">Entrega Exprés</div>
                        <div style="color: var(--text-muted); font-size: 0.7rem;">Promedio: 2 min</div>
                    </div>
                </div>

                <img src="img/mascota.png" alt="Mascota Tiburón E-Gaming" class="hero-mascot">

                <div class="floating-badge floating-badge-bottom">
                    <i class="fa-solid fa-shield-halved"></i>
                    <div>
                        <div style="color: #fff;">100% Garantizado</div>
                        <div style="color: var(--text-muted); font-size: 0.7rem;">Soporte directo 24/7</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Comunidad -->
    <section class="community-section">
        <h2 class="section-title">ÚNETE A NUESTRA COMUNIDAD</h2>
        <div class="cards-grid">
            <a href="https://whatsapp.com/channel/TU_CANAL_AQUI" target="_blank" class="info-card">
                <div class="card-icon wa-icon"><i class="fa-brands fa-whatsapp"></i></div>
                <div class="card-content">
                    <h3>Canal Oficial WhatsApp</h3>
                    <p>Recibe ofertas relámpago, alertas de saldo y sorteos semanales.</p>
                    <span class="btn-card-link">Unirme al Canal ➔</span>
                </div>
            </a>

            <a href="https://tiktok.com/@TU_USUARIO_TIKTOK" target="_blank" class="info-card">
                <div class="card-icon tt-icon"><i class="fa-brands fa-tiktok"></i></div>
                <div class="card-content">
                    <h3>Síguenos en TikTok</h3>
                    <p>Mira comprobantes de recargas en vivo y contenido exclusivo eSports.</p>
                    <span class="btn-card-link">Seguir en TikTok ➔</span>
                </div>
            </a>

            <a href="https://wa.me/TU_NUMERO_TELEFONO" target="_blank" class="info-card">
                <div class="card-icon sp-icon"><i class="fa-solid fa-headset"></i></div>
                <div class="card-content">
                    <h3>Atención al Cliente 24/7</h3>
                    <p>¿Tienes dudas con tu pago o ID? Escríbenos directo para atención humana.</p>
                    <span class="btn-card-link">Contactar Soporte ➔</span>
                </div>
            </a>
        </div>
    </section>

    <!-- Catálogo -->
    <section class="games-section" id="catalogo">
        <h2 class="section-title">JUEGOS Y TARJETAS DESTACADAS</h2>

        <div class="games-grid" id="gamesGrid">
            <a href="blood-strike.html" class="game-card" data-title="blood strike oro recarga fps pases">
                <div class="game-thumb">
                    <span class="badge-status">INSTANTÁNEO</span>
                    <img src="img/Blood Strike.png" alt="Blood Strike">
                </div>
                <div class="game-info">
                    <h4>BLOOD STRIKE</h4>
                    <span class="arrow-btn"><i class="fa-solid fa-chevron-right"></i></span>
                </div>
            </a>

            <a href="#" class="game-card" data-title="free fire diamantes ff pase de nivel semanal mensual garena">
                <div class="game-thumb">
                    <span class="badge-status">OFERTA ID</span>
                    <img src="img/Free Fire.png" alt="Free Fire">
                </div>
                <div class="game-info">
                    <h4>FREE FIRE</h4>
                    <span class="arrow-btn"><i class="fa-solid fa-chevron-right"></i></span>
                </div>
            </a>

            <a href="#" class="game-card" data-title="roblox robux gift card tarjeta de regalo pin digital">
                <div class="game-thumb">
                    <span class="badge-status">GIFT CARD</span>
                    <img src="img/roblox.png" alt="Roblox">
                </div>
                <div class="game-info">
                    <h4>ROBLOX (ROBUX)</h4>
                    <span class="arrow-btn"><i class="fa-solid fa-chevron-right"></i></span>
                </div>
            </a>
        </div>

        <div id="noResults" style="display: none; text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-ghost" style="font-size: 2.5rem; color: var(--blue-neon); margin-bottom: 10px;"></i>
            <p>No encontramos ningún juego o tarjeta con ese nombre.</p>
        </div>
    </section>

    <footer>
        <p><strong>E GAMING STORE</strong> © 2026 - Todos los derechos reservados.</p>
    </footer>

    <script>
        function filtrarJuegosDirecto() {
            var input = document.getElementById('searchInput');
            var filter = input.value.toLowerCase().trim();
            var grid = document.getElementById('gamesGrid');
            var cards = grid.getElementsByClassName('game-card');
            var noResults = document.getElementById('noResults');
            var suggestionsBox = document.getElementById('searchSuggestions');
            
            var encontrados = 0;
            suggestionsBox.innerHTML = '';

            if (filter === '') {
                suggestionsBox.style.display = 'none';
            } else {
                suggestionsBox.style.display = 'block';
            }

            for (var i = 0; i < cards.length; i++) {
                var card = cards[i];
                var titleAttr = card.getAttribute('data-title') || '';
                var h4Element = card.getElementsByTagName('h4')[0];
                var gameName = h4Element ? h4Element.innerText : '';
                var linkUrl = card.getAttribute('href') || '#';
                
                var imgElement = card.querySelector('.game-thumb img');
                var imgSrc = imgElement ? imgElement.getAttribute('src') : '';

                if (titleAttr.toLowerCase().indexOf(filter) > -1 || gameName.toLowerCase().indexOf(filter) > -1) {
                    card.style.display = 'block';
                    encontrados++;

                    if (filter !== '') {
                        var item = document.createElement('a');
                        item.className = 'suggestion-item';
                        item.href = linkUrl;
                        item.innerHTML = `
                            <div class="suggestion-left">
                                <img src="${imgSrc}" class="suggestion-thumb" alt="${gameName}">
                                <span>${gameName}</span>
                            </div>
                            <i class="fa-solid fa-chevron-right"></i>
                        `;
                        suggestionsBox.appendChild(item);
                    }
                } else {
                    card.style.display = 'none';
                }
            }

            if (encontrados === 0 && filter !== '') {
                noResults.style.display = 'block';
                suggestionsBox.innerHTML = '<div style="padding: 12px; font-size: 0.8rem; color: #8ea0bc; text-align: center;">Sin resultados</div>';
            } else {
                noResults.style.display = 'none';
            }
        }

        function openAuthModal() { document.getElementById('authModal').classList.add('active'); }
        function closeAuthModal() { document.getElementById('authModal').classList.remove('active'); }

        function openProfileModal() { 
            document.getElementById('profileDropdown').classList.remove('active');
            document.getElementById('profileModal').classList.add('active'); 
        }
        function closeProfileModal() { document.getElementById('profileModal').classList.remove('active'); }

        function switchAuthTab(type) {
            var loginForm = document.getElementById('loginForm');
            var regForm = document.getElementById('registerForm');
            var tabLogin = document.getElementById('tabLoginBtn');
            var tabReg = document.getElementById('tabRegisterBtn');

            if (type === 'login') {
                loginForm.style.display = 'block';
                regForm.style.display = 'none';
                tabLogin.classList.add('active');
                tabReg.classList.remove('active');
            } else {
                loginForm.style.display = 'none';
                regForm.style.display = 'block';
                tabReg.classList.add('active');
                tabLogin.classList.remove('active');
            }
        }

        function togglePasswordVisibility(inputId, eyeIcon) {
            const input = document.getElementById(inputId);
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            }
        }

        function toggleDropdown() {
            document.getElementById('profileDropdown').classList.toggle('active');
        }

        function handleRegister(e) {
            e.preventDefault();
            var name = document.getElementById('regName').value.trim();
            var email = document.getElementById('regEmail').value.trim();
            var phone = document.getElementById('regPhone').value.trim();
            var clientID = 'EG-' + Math.floor(100000 + Math.random() * 900000);

            var userObj = { name: name, email: email, phone: phone, clientID: clientID };
            localStorage.setItem('egaming_user', JSON.stringify(userObj));
            
            closeAuthModal();
            checkUserSession();
            alert('¡Registro exitoso! Bienvenido ' + name);
        }

        function handleLogin(e) {
            e.preventDefault();
            var email = document.getElementById('loginEmail').value.trim();
            var storedUser = localStorage.getItem('egaming_user');
            
            if (storedUser) {
                var userObj = JSON.parse(storedUser);
                if(userObj.email.toLowerCase() === email.toLowerCase()){
                    closeAuthModal();
                    checkUserSession();
                    return;
                }
            }

            var name = email.split('@')[0];
            var userObj = { name: name, email: email, phone: 'No registrado', clientID: 'EG-998877' };
            localStorage.setItem('egaming_user', JSON.stringify(userObj));
            closeAuthModal();
            checkUserSession();
        }

        function logoutUser() {
            localStorage.removeItem('egaming_user');
            document.getElementById('profileDropdown').classList.remove('active');
            checkUserSession();
        }

        function checkUserSession() {
            var storedUser = localStorage.getItem('egaming_user');
            var btnLogin = document.getElementById('btnLoginTrigger');
            var userMenu = document.getElementById('userProfileMenu');

            if (storedUser) {
                var user = JSON.parse(storedUser);
                btnLogin.style.display = 'none';
                userMenu.style.display = 'block';

                var initial = user.name.charAt(0).toUpperCase();
                document.getElementById('navAvatar').innerText = initial;
                document.getElementById('modalAvatar').innerText = initial;
                document.getElementById('navUsername').innerText = user.name;
                document.getElementById('profileDisplayName').innerText = user.name;
                document.getElementById('profileDisplayEmail').innerText = user.email;
                document.getElementById('profileClientID').value = user.clientID || 'EG-102030';
                document.getElementById('profilePhone').value = user.phone || 'N/A';
            } else {
                btnLogin.style.display = 'inline-block';
                userMenu.style.display = 'none';
            }
        }

        document.addEventListener('click', function(e) {
            var navSearch = document.querySelector('.nav-search');
            var suggestionsBox = document.getElementById('searchSuggestions');
            if (navSearch && !navSearch.contains(e.target)) {
                suggestionsBox.style.display = 'none';
            }

            var userMenu = document.getElementById('userProfileMenu');
            var profileDropdown = document.getElementById('profileDropdown');
            if (userMenu && !userMenu.contains(e.target)) {
                profileDropdown.classList.remove('active');
            }
        });

        window.addEventListener('DOMContentLoaded', checkUserSession);
    </script>
</body>
</html>