import { define } from "../utils.ts";
import NotesHighlight from '../content/bs/notes/Highlight.tsx';
import StoriesHighlight from '../content/bs/stories/Highlight.tsx';
import Sidebar from '../content/bs/ArticlesSidebar.tsx';
import HomePage from '../content/bs/Home.mdx';

export default define.page(function Home(_ctx) {

    return (
        <main class="container-fluid">
            <div class="container mt-2">
                <div class="row">
                    <div class="col-sm-8">
                        <NotesHighlight />
                        <StoriesHighlight />
                    </div>
                    <Sidebar />
                </div>
            </div>
            <div class="container pt-3 text-center">
                <div class="btn-group">
                    <a class="btn btn-primary" href="/templates/bs5">Bootstrap Basic</a>
                    <a class="btn btn-primary" href="#blogs">Blogs</a>
                    <a class="btn btn-primary" href="#notes">Notes</a>
                </div>
            </div>
            <div class="container p-3" id="notes">
                <HomePage />
            </div>
            <div class="container p-3" id="blogs">
                <h4>Blogs</h4>
                <p>Nanti kita cari caranya...</p>
            </div>
        </main>
    );
});

