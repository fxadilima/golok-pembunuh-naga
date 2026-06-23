import { define } from "../../../utils.ts";
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';
//import hljs from 'npm:highlight.js';

const renderMarkdown = (text: string): string => {
    const md = MarkdownIt({
        html: true,
        break: false,
        gfm: true
    }).use(footnote);
    const retval = md.render(text);
    return retval;
}

export const handler = define.handlers({
    async GET(ctx) {
        const name = ctx.params.title;
        const realPath = `${Deno.cwd()}/content/history/ba/${name}.md`;
        try {
            const txt = await Deno.readTextFile(realPath);
            const html = `<div>${renderMarkdown(txt)}</div>`;
            return new Response(html, {
                status: 200,
                headers: {
                    'content-type': 'text/html; charset=utf-8'
                }
            });
        }
        catch (err) {
            console.log(`Error:\n${err}`);
            return new Response(`${err}`, {
                status: 404,
                headers: {
                    'content-type': 'text/plain'
                }
            });
        }
    },
});

