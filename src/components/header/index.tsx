import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-white" data-bs-theme="light">
                <div class="container-fluid">
                    <a class="navbar-brand poppins-extrabold" href="/">Qwik</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link poppins-medium" href="/login">
                                    <button class='btn btn-primary btn-sm px-4'>
                                    Login
                                    </button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link poppins-medium" href="/signup">
                                <button class='btn btn-dark border btn-sm px-4'>
                                    Signup
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
})