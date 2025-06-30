import { Button } from "./style";

function BotaoPadrao({children, theme, ...props}) {

    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}

export default BotaoPadrao