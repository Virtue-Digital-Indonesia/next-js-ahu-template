import ProviderWrapper from '../src/components/ProviderWrapper/ProviderWrapper' // BaseUI
import '../src/app/globals.css' // Tailwind

/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story, context) => {
      if (context.parameters.fileName.includes('components/')) { // Conditional provider for /components folder
        return (
          <ProviderWrapper>
            <Story />
          </ProviderWrapper>
        )
      }
      return <Story />
    }
  ]
}

export default preview