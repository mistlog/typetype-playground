import React, { useState } from 'react';
import { Nav, INavLinkGroup, INavLink } from '@fluentui/react';
import UrlParserExample from "./examples/url-parser.json";
import SyntaxExample from "./examples/syntax.json";
import DiffExample from "./examples/645-medium-diff.json";
import StringToUnionExample from "./examples/531-medium-string-to-union.json";
import PermutationExample from "./examples/296-medium-permutation.json";

export type Examples = Map<string, Array<IExample>>;

export interface IExample {
    code: string;
    name: string;
}

export interface IExampleNav {
    onSelectExample: (example: IExample) => void;
}

const examples = new Map<string, Array<IExample>>([
    ["Examples", [
        { name: "syntax", code: SyntaxExample.code },
        { name: "string-to-union", code: StringToUnionExample.code },
        { name: "object-diff", code: DiffExample.code },
        { name: "permutation", code: PermutationExample.code},
        { name: "url-parser", code: UrlParserExample.code },
    ]],
]);

export function ExampleNav(props: IExampleNav) {
    const { onSelectExample } = props;
    const groups = CreateGroupsFromExamples(examples);
    const [selected, setSelected] = useState(examples.get("Examples")![0].name);
    return (
        <Nav
            selectedKey={selected}
            groups={groups}
            styles={{ root: { width: 200, marginTop: -20 } }}
            onLinkClick={(_, item) => {
                const name = item!.key;
                if (name) {
                    onSelectExample({ name, code: examples.get("Examples")!.find(example => example.name === name)!.code });
                    setSelected(name);
                }
            }}
        />
    )
}

/**
 * 
 */
function CreateGroupsFromExamples(examples: Examples): Array<INavLinkGroup> {
    //
    const links: Array<INavLink> = [];
    examples.forEach((examples, group_name) => {
        const link: INavLink = {
            name: group_name,
            url: "",
            isExpanded: true,
            links: examples.map(example => ({ name: example.name, url: "", key: example.name }))
        }

        links.push(link);
    })

    //
    const groups: Array<INavLinkGroup> = [{ links }];
    return groups;
}
