
const Pills = () => {
    return (
        <div class="card">
            <div class="card-header">
                <h3>Some Links</h3>
                <p>Lorem ipsum dolor sit ame.</p>
            </div>
            <div class="card-body">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
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
                    <h3>Header</h3>
                </div>
                <div class="card-body">
                    <p>Card body</p>
                </div>
                <div class="card-footer">
                    <h4>Footer</h4>
                </div>
            </div>
            <Pills />
        </div>
    );
}

