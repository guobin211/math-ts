export interface Bootstrap {
    /**
     * init local state
     */
    initState: () => void;
    /**
     * init ajax state
     */
    initAjax: () => void;
    /**
     * update state
     */
    updateState: () => void;
    /**
     * init app component
     */
    initApp: () => void;
}
