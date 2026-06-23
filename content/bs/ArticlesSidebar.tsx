
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
                <img class="card-img-top" 
                    src="/images/banners/book1-cover.jpg" 
                    alt="Ki Son-yeo arrived in Kaifeng, 1328" 
                    style="width:100%" />
                <div class="card-header">
                    <h5>Goryeo, 1320</h5>
                </div>
                <div class="card-body">
                    <p><em>"Be like water, Shengniang. When blocked, it finds a way. When compressed, it breaks kingdoms."</em></p>
                    <p>Haengju, 1320. Inside a peaceful courtyard in the southern valleys of Goryeo, five-year-old Ki Son-yeo—known to her master as Shengniang, the 'Holy Maiden'—is taught the art of survival. Under the guidance of a legendary former elder of the Beggars' Sect, she learns that true strength does not lie in brute force, but in Wu Wei: the art of effortless action, moving like water around stone.</p>
                    <p>She thinks she is merely learning how to outsmart local bullies and master the steps of qinggong. She does not yet know that she is the hidden dragon of Goryeo.</p>
                    <p>But as the Emperor of the Great Yuan Dynasty suddenly falls, a tremor shakes the foundations of the world. Tyrants will rise, empires will fracture, and the quiet girl who learned to flow like a river must now prepare to steer the tides of history.</p>
                    <p>The saga begins. The Dragon awaits.</p>
                </div>
                <div class="card-footer">
                    <h6>Footer</h6>
                </div>
            </div>
            <Pills />
        </div>
    );
}

