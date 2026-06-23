
const Pills = () => {
    return (
        <div class="card">
            <div class="card-header">
                <h3>Catatan</h3>
                <p>Link berikut ada di halaman ini juga.</p>
            </div>
            <div class="card-body">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#notes">Editorial</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#blogs">Blogs</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">Belum terpikir...</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div class="col-sm-4">
            <div class="card my-3">
                <img class="card-img-top" src="/images/kaifeng.jpg" alt="Me" style="width:100%" />
                <div class="card-header">
                    <h3>Kaifeng, 1357</h3>
                </div>
                <div class="card-body">
                    <p>Cerita tentang Qi Shengniang di Kaifeng 1357?</p>
                </div>
                <div class="card-footer">
                    <h4>Footer</h4>
                </div>
            </div>
            <Pills />
        </div>
    );
}

