// global.d.ts
interface RecEmbedJs {
    load: (options: {
      widget_id: string;
      page_name: string;
      source: string;
      site: string;
      brand_color: string;
      empty_job_msg: string;
    }) => void;
  }
  
  interface Window {
    rec_embed_js: RecEmbedJs;
  }
