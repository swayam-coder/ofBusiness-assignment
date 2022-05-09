import { useContext, createContext, useState } from "react";

const resultContext = createContext<{
	results: any[];
	setResults: React.Dispatch<React.SetStateAction<any[]>>;
}>({ results: [], setResults: function () {} });

export function useResultContext() {
	return useContext(resultContext);
}

export function ContextProvider({ children }: { children: JSX.Element }) {
	const [results, setResults] = useState<Array<any>>([]);

	const val = { results, setResults };

	return (
		<resultContext.Provider value={val}>{children}</resultContext.Provider>
	);
}
