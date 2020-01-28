@section('styles')
@stop

<header class="main-header">
    <!-- Logo -->
		<a href="{{route('dashboard')}}" class="logo">
			<!-- mini logo for sidebar mini 50x50 pixels -->
			<span class="logo-mini"><b>SP</b></span>
			<!-- logo for regular state and mobile devices -->
			<span class="logo-lg"><b>Sci-Pub</b></span>
		</a>
		<!-- Header Navbar: style can be found in header.less -->
		<nav class="navbar">
			<!-- Sidebar toggle button-->
			<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
				<span class="sr-only">Switch navigation</span>
			</a>

			<div class="navbar-custom-menu">
				<ul class="nav navbar-nav">
					<li>
						<a href="#" >Administrator</a>
					</li>
					<!-- User Account: style can be found in dropdown.less -->
					<li class="dropdown user user-menu">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<img src="{{ asset('img/user_avatar.png') }}" class="user-image" alt="User Image">
							<span class="hidden-xs">Username</span>
						</a>
						<ul class="dropdown-menu">
							<!-- User image -->
							<li class="user-header">
								<img src="{{ asset('img/user_avatar.png') }}" class="img-circle" alt="User Image">
								<p>
								Username
								</p>
							</li>
							<!-- Menu Footer-->
							<li class="user-footer">
								<div class="pull-left">
									<a href="#" class="btn btn-default btn-flat">Профил</a>
								</div>
								<div class="pull-right">
									<a href="{{route('logout')}}" class="btn btn-default btn-flat">Изход</a>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	</header>