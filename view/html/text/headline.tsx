import { helpers } from '~/src'

module Types {
    export type Props = {
        tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    }
}

export const Headline: React.FC<Types.Props> = ({ tag, children, ...props }) => {
    return (
        <helpers.Element.Create tag={tag} props={props}>
            {children}
        </helpers.Element.Create>
    )
}