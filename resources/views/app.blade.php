<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead

    <style>
        body {
            font-family: 'Lora', serif;
        }
    </style>

    <!-- FontAwesome Kit -->
    <script src="https://kit.fontawesome.com/27ce9fb29a.js" crossorigin="anonymous"></script>
</head>
<body class="antialiased">
@inertia
</body>
</html>
