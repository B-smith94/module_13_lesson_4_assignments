const useSessionStorageManager = () => {
    // Task 1 and 2
    const storeToken = (jwToken: string) => {
        try {
            sessionStorage.setItem('jwToken_key', jwToken)
            console.log('Token Stored Successfully, Login Successful')
        } catch (error) {
            console.error('Failed to store JWT:', error)
        }
    };

    const retrieveToken = (): any => {
        try {
            const jwToken = sessionStorage.getItem('jwToken_key')
            console.log('Token Retireved Successfully')
            return jwToken
        } catch (error) {
            console.error('Failed to retrieve token:', error)
            return null;
        }
    }    

    const clearToken = (): void => {
        try {
            sessionStorage.clear();
            console.log('Token Cleared, Successfully Logged Out')
        } catch (error) {
            console.error('Failed to clear JWT:', error)
        }
    }
    
    return { storeToken, retrieveToken, clearToken };
};

export default useSessionStorageManager;