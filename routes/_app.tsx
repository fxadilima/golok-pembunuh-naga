import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
    return (
        <html lang="en" data-bs-theme="dark">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Golok Pembunuh Naga</title>
                <meta name="author" content="FX. Adi Lima" />
                <meta name="description" content="Dokumentasi penyusunan cerita Tanah Perjanjian Di Ufuk Barat" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
                <script src="https://kit.fontawesome.com/acda0af544.js" crossorigin="anonymous"></script>
            </head>
            <body>
                <Component />
            </body>
        </html>
    );
});
