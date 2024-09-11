import LikeButton from "./like-button";
//this is component
function Header({ title }) { // object destructuring
    return <h1>{title}</h1> // this is jsx
}
// An object property
function HeaderObj(p) {
    return <h1>{p.title}</h1>
}
//A template literal:
function HeaderTemplateLiteral({ title }) {
    return <h1>{`Cool ${title}`}</h1>
}
//The returned value of a function: it is not component but normal js function
function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}
//You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land
function HeaderReFunc({ title }) {
    return <h1>{createTitle(title)}</h1>
}

// ternary operator
function HeaderTernary({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];


    return <div>
        <LikeButton />
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>


        <Header title="React" />
        <Header title="Develop.Preview.Ship" />
        <HeaderObj title="An object property" />
        <HeaderTemplateLiteral title="Tempalte literal" />
        <HeaderReFunc title="You can think of curly braces as a way to enter JavaScript land while you are in JSX land" />
        <HeaderTernary title="Ternary" />
    </div>;
}