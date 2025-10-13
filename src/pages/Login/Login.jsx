import './Login.css'


const Login = () => {
    return (
        <div className="bg-light d-flex align-items-center justify-content-center vh-100 login-background">
            <div className="shadow-lg w-100" style={{maxWidth:'480px'}}>
                <div className="card-body">
                    <div className="text-center">
                        <h1 className="card-title h3">Sign in</h1>
                        <p className="card-text text-muted">
                            Sign in below to access your account
                        </p>
                    </div>
                    <div className="mt-4">
                        <form >
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-muted">
                                    Email address
                                </label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="Enter email address" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-muted">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" className="form-control"
                                       placeholder="Enter Password"/>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-dark btn-lg">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;