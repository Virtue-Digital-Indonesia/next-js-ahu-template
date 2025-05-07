import PropTypes from 'prop-types'
import { ToastProvider } from '@heroui/toast'
import { HeroUIProvider } from '@heroui/system'

const ProviderWrapper = (props) => {
    const { children } = props

    return (
        <HeroUIProvider>
            <ToastProvider placement='top-center'/>
            {children}
        </HeroUIProvider>
    )
}

ProviderWrapper.propTypes = {
    children: PropTypes.element
}

export default ProviderWrapper