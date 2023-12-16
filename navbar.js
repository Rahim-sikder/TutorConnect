var navbarHTML = `
    <section>
        <nav class="navbar navbar-expand-lg" style="background-color: rgb(189, 241, 241);">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TutorConnect</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="tutor_reg.html">Become A Tutor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="student_reg.html">Be A Student</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Contact</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Login
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="login.html">As Student</a></li>
                                <li><a class="dropdown-item" href="login.html">As Teacher</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
`;

// Assuming you have a container element with an id, you can set the innerHTML
document.getElementById('yourContainerId').innerHTML = navbarHTML;
