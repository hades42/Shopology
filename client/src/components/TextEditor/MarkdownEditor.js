import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/nord.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/gruvbox-dark.css";
import "codemirror/mode/markdown/markdown";
import "codemirror/keymap/sublime";
import "codemirror/keymap/vim";
import "codemirror/keymap/emacs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import classes from "./MarkdownEditor.module.css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const MarkdownEditor = (props) => {
  const fontSizeMain = [16, 18, 22, 24, 28];
  const themeMain = [
    "nord",
    "solarized light",
    "solarized dark",
    "gruvbox-dark",
    "monokai",
  ];
  const keybindMain = ["vim", "sublime", "emacs"];
  const [font, setFont] = useState(16);
  const [theme, setTheme] = useState("nord");
  const [keybinding, setKeybinding] = useState("sublime");
  const [lineWrap, setLineWrap] = useState(true);
  const [editorOnly, setEditorOnly] = useState(true);
  const [renderOnly, setRenderOnly] = useState(false);
  const [splitScreen, setSplitScreen] = useState(false);

  const splitHandler = () => {
    setSplitScreen(true);
    setEditorOnly(false);
    setRenderOnly(false);
  };

  const editorHandler = () => {
    setSplitScreen(false);
    setEditorOnly(true);
    setRenderOnly(false);
  };
  const renderHandler = () => {
    setSplitScreen(false);
    setEditorOnly(false);
    setRenderOnly(true);
  };

  let editorClass = classes.editor;
  let markdownClass = classes.markdown;
  if (splitScreen && !editorOnly && !renderOnly) {
    editorClass = classes.editor;
    markdownClass = classes.markdown;
  } else if (editorOnly && !splitScreen && !renderOnly) {
    editorClass = classes.expand;
    markdownClass = classes.close;
  } else {
    editorClass = classes.close;
    markdownClass = `${classes.markdown} ${classes.expand}`;
  }

  const { text, onChange } = props;
  const changeHandler = (editor, data, value) => {
    onChange(value);
  };
  const setLineWrapHandler = (value) => {
    let updatedValue = value;

    if (updatedValue === "true" || updatedValue === "false") {
      updatedValue = JSON.parse(updatedValue);
    }
    setLineWrap(updatedValue);
  };

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={nord}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <div className={classes.container}>
      <div className={classes.control}>
        <div className={classes.controlMain}>
          <div className={classes.option}>
            <label htmlFor="font">Font</label>
            <select
              id="font"
              value={font}
              onChange={(e) => setFont(e.target.value)}
            >
              {fontSizeMain.map((f) => (
                <option key={f} value={f}>
                  {f}px
                </option>
              ))}
            </select>
          </div>

          <div className={classes.option}>
            <label htmlFor="theme">Theme</label>
            <select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              {themeMain.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>

          <div className={classes.option}>
            <label htmlFor="font">Keybinding</label>
            <select
              id="keybinding"
              value={keybinding}
              onChange={(e) => setKeybinding(e.target.value)}
            >
              {keybindMain.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div className={classes.option}>
            <label htmlFor="font">Line Wrap</label>
            <select
              id="linewrap"
              value={lineWrap}
              onChange={(e) => setLineWrapHandler(e.target.value)}
            >
              <option key="true" value={true}>
                true
              </option>

              <option key="false" value={false}>
                false
              </option>
            </select>
          </div>

          <div className={classes.btnOption} onClick={splitHandler}>
            Split Screen
          </div>
          <div className={classes.btnOption} onClick={editorHandler}>
            Editor Only
          </div>
          <div className={classes.btnOption} onClick={renderHandler}>
            Render Only
          </div>
        </div>
      </div>
      <div className={classes.main} style={{ fontSize: `${font}px` }}>
        <ControlledEditor
          onBeforeChange={changeHandler}
          value={text}
          className={editorClass}
          options={{
            lineWrapping: lineWrap,
            lint: true,
            mode: "markdown",
            theme: theme,
            lineNumbers: true,
            keyMap: keybinding,
          }}
        />
        <ReactMarkdown
          components={components}
          children={text}
          className={markdownClass}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
