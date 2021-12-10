import { helpers } from '~/src'


const styles = {
    root: helpers.css`
        background-color: red;
    `,
}

export function Cancel() {
    return (
        <button css={styles.root} >
            Cancel
        </button>
    )
}