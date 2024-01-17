// ** React Imports
import { useState, forwardRef, useEffect, useRef } from "react";

import dynamic from "next/dynamic";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

// import SunEditor, { buttonList } from 'suneditor-react'

// buttonList: [
//   ['undo', 'redo'],
//   ['bold', 'underline', 'italic', 'list'],
//   ['table', 'link', 'image'],
//   ['align', 'font', 'fontColor', 'fontSize'],
//   ['preview', 'print'],
//   ['list'],
//   [
//     {
//       name: 'customLink',
//       dataDisplay: 'dialog',
//       title: 'Custom link',
//       buttonClass: '111',
//       innerHTML: 'Employee Name'
//     }
//   ]
// ]

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

// SunEditor.insertHTML('...')

// const list = dynamic(() => import('suneditor/src/plugins/submenu/list'), {
//   ssr: false
// })

const plugins = dynamic(() => import("suneditor/src/plugins"), {
  ssr: false,
});

// import SunEditor, { buttonList } from 'suneditor-react'

// import suneditor from 'suneditor'
// import plugins from 'suneditor/src/plugins'
// import list from 'suneditor/src/plugins/submenu/list'

const Editor = ({ content, setContent }) => {
  // ** States

  const editorRef = useRef();

  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;
  };

  return (
    <div className="">
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        setAllPlugins={true}
        setOptions={{
          height: "350",
          maxHeight: "400px",
          buttonList: [
            ["undo", "redo"],
            ["bold", "underline", "italic", "list"],
            ["table", "link", "image"],
            ["align", "font", "fontColor", "fontSize", "paragraphStyle"],
            ["fullScreen"],
          ],
        }}
        setContents={content}
        onChange={(e) => {
          setContent(e);
        }}
      />
    </div>
  );
};

export default Editor;
