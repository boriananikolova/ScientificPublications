<aside class="main-sidebar">
	<!-- sidebar: style can be found in sidebar.less -->
	<section class="sidebar">
		<!-- Sidebar user panel -->
		<div class="user-panel">
			<div class="pull-left image">
				<img src="{{ asset('img/user_avatar.png') }}" class="img-circle" alt="User Image">
			</div>
			<div class="pull-left info">
				<p>{{Auth::user()->name}}</p>
				<a href="{{route('dashboard')}}"><i class="fa fa-circle text-success"></i> Online</a>
			</div>
		</div>
		<!-- sidebar menu: : style can be found in sidebar.less -->
		<ul class="sidebar-menu">
			<li class="header">Admin Menu</li>
			<!-- Панел -->
			<li><a href="{{route('dashboard')}}"><i class="fa fa-tasks"></i> <span>Dashboard</span></a></li>
			<li>
				<a href="{{route('users')}}">
					<i class="fa fa-user"></i> <span>Users</span>
				</a>
			</li>
			<li>
				<a href="{{route('publications')}}">
					<i class="fa fa-list"></i> <span>Publications</span>
				</a>
			</li>
			<li>
				<a href="{{route('categories')}}">
					<i class="fa fa-list"></i> <span>Categories</span>
				</a>
			</li>
		</ul>
	</section>
	<!-- /.sidebar -->
</aside>