//import { useSignal } from "@preact/signals";
//import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
//import Counter from "../islands/Counter.tsx";
import HomePage from '../content/bs/Home.mdx';

export default define.page(function Home(ctx) {
    return (
        <div class="container-fluid">
            <HomePage />
        </div>
    );
});

