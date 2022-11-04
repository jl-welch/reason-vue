<template>
	<a class="skip-link screen-reader-text" href="#main">
		Skip to content
	</a>

	<header class="header">
		<div class="header__top">
			<div class="container">
				<button class="header__search" type="button">
					Search
				</button>
	
				<div>
					<a class="header__top-link header__top-link--learn" href="#">
						Learn
					</a>
					<a class="header__top-link header__top-link--donate" href="#">
						Donate
					</a>
				</div>
			</div>
		</div>

		<nav class="header__nav nav">
			<div class="container">
				<img
          class="nav__logo"
          src="https://picsum.photos/100/60"
          alt="Random image for logo"
        >

        <ul class="nav__list">
          <li class="nav__item">
            <a href="/" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="/lorem" class="nav__link">
              What we do
            </a>
          </li>
          <li class="nav__item">
            <a href="/ipsum" class="nav__link">
              The digital divide
            </a>
          </li>
          <li class="nav__item">
            <a href="/dolor" class="nav__link">
              Get involved
            </a>
          </li>
        </ul>
			</div>
		</nav>

		<div class="header__branding">
			<div class="container">
				<h1 class="header__title title">
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
						Get online week 2021
					</a>
				</h1>

        <p class="header__introduction">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit autem minus commodi odit ut quae, culpa, laborum earum libero delectus necessitatibus nihil vero ab veritatis pariatur qui. Distinctio, necessitatibus possimus?
        </p>
	
				<a class="header__cta btn" href="#">
					Get involved now!
				</a>
			</div>
		</div>
	</header>
</template>
