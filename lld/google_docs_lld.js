import * as fs from "fs";

// ---------- Abstraction ----------
abstract class DocumentElement {
  abstract render(): string;
}

// ---------- Concrete Elements ----------
class TextElement extends DocumentElement {
  constructor(private text: string) {
    super();
  }
  render(): string {
    return this.text;
  }
}

class ImageElement extends DocumentElement {
  constructor(private imagePath: string) {
    super();
  }
  render(): string {
    return `[Image: ${this.imagePath}]`;
  }
}

class NewLineElement extends DocumentElement {
  render(): string {
    return "\n";
  }
}

class TabSpaceElement extends DocumentElement {
  render(): string {
    return "\t";
  }
}

// ---------- Document ----------
class Document {
  private elements: DocumentElement[] = [];

  addElement(element: DocumentElement) {
    this.elements.push(element);
  }

  render(): string {
    return this.elements.map(e => e.render()).join("");
  }
}

// ---------- Persistence ----------
interface Persistence {
  save(data: string): void;
}

// ---------- FileStorage ----------
class FileStorage implements Persistence {
  save(data: string) {
    fs.writeFileSync("document.txt", data);
    console.log("Saved to document.txt");
  }
}

// ---------- DBStorage ----------
class DBStorage implements Persistence {
  save(data: string) {
    // simulate DB save
  }
}

// ---------- DocumentEditor ----------
class DocumentEditor {
  private renderedDocument = "";

  constructor(
    private document: Document,
    private storage: Persistence
  ) {}

  addText(text: string) {
    this.document.addElement(new TextElement(text));
  }

  addImage(path: string) {
    this.document.addElement(new ImageElement(path));
  }

  addNewLine() {
    this.document.addElement(new NewLineElement());
  }

  addTabSpace() {
    this.document.addElement(new TabSpaceElement());
  }

  renderDocument(): string {
    if (!this.renderedDocument) {
      this.renderedDocument = this.document.render();
    }
    return this.renderedDocument;
  }

  saveDocument() {
    this.storage.save(this.renderDocument());
  }
}

// ---------- Client ----------
const doc = new Document();
const storage = new FileStorage();
const editor = new DocumentEditor(doc, storage);

editor.addText("Hello, TypeScript!");
editor.addNewLine();
editor.addText("This is a TS document editor example.");
editor.addNewLine();
editor.addTabSpace();
editor.addText("Indented text inside TS.");
editor.addNewLine();
editor.addImage("picture.jpg");

console.log(editor.renderDocument());
editor.saveDocument();
