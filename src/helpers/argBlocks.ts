


interface PropType {
    defaultValue: any,
    description: string,
    name: string,
    required: boolean,
    type: {
        name: string
    }
}
interface DocGenType {
    __docgenInfo: {
        description: string;
        displayName: string;
        props: Record<string, PropType>
    }
}

function cleanPropType(prop: PropType) {
    if (prop && prop.type && prop.type.name) {
        prop.type.name = prop.type.name.replace(' | undefined', '');
    }
}

const playgroundGroup = 'Playground';
const eventsGroup = 'Events';
const ariaGroup = "Aria";
const elseGroup = 'Everything Else';

/**
 * Create a dictionary of StoryBook arg types.  Be default the type and control will
 * be automatically inferred and this helper does an ok job of setting up a default UI.
 * 
 * This method also groups the parameters specified in the args param in the Playground group
 * and then puts all methods that start with on* in the events group, all props starting with 
 * aria* in the aria group and everthing else in an Everthing Else group
 * @param args The arguments to put in the Playground group
 * @param type The base type of the arguments.  If passed will group all arguments by some basic rules
 */
export function PlayGround(args: Record<string, any>, type?: any) {
    for (const key in args) {
        if (!key.startsWith('on')) {
            args[key]["table"] = { category: playgroundGroup }
        }
    }
    if (type) {
        const docType = type as unknown as DocGenType;
        const props = docType.__docgenInfo?.props;
        for (const key in props) {
            cleanPropType(props[key]);
            let category: string = elseGroup;
            if (key.startsWith('aria')) {
                category = ariaGroup;
            } else if (key.startsWith('on')) {
                category = eventsGroup;
            }
            args[key] = Object.assign(
                {
                    table: {
                        category
                    }
                },
                args[key]
            );
        }
    }
    return args;
}