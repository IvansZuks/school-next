// import { GlobalProvider } from './global';

// The higher the priority - the sooner gets rendered
const providers = [
    // GlobalProvider
];

export default function ContextProviders({ children }) {
    return providers.reduceRight(
        (acc, Provider) => <Provider>{ acc }</Provider>,
        children
    );
}
