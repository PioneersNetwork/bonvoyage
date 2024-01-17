@extends('layouts.appNew')

@section('metaData')
<title>{{$meta->title? $meta->title:__('Clubs')}} </title>
<meta name="description" content={{$meta->description}}>
<meta name="keywords" content={{$meta->keywords}}>
@endsection

@section('content')

<!-- Slide -->
<section class="slider">
	<div class="rev_slider_wrapper fullwidthbanner-container p-t-50">
		<div id="rev_slider_1" class="rev_slider fullwidthabanner" data-version="5.4.5" style="display:none">
			<ul>
				@foreach ($picture as $pic)
				<li data-transition="slidingoverlayhorizontal">
					<img src="/images/clup/{{$pic->name}}" alt="IMG-SLIDE" class="rev-slidebg">
				</li>
				@endforeach
			</ul>
		</div>
	</div>
</section>
<div class="container">




	<section class=" flex-wr-s-st m-b-15-sr991 p-t-10">
		
		<div class="">
			<!-- Title section -->
			<div class="flex-col-c-s p-b-23" style="text-align: center;">
				<h3 class="t1-b-1 cl-3 m-b-11" style="color: darkblue; font-weight: bolder; text-align: center;">
					{{$club->title[config('app.locale','en')]}}
				</h3>

			</div>

			<p class="t1-s-2 cl-6 m-b-17">
				@if($club->description)
				{!! $club->description[config('app.locale','en')] !!}
				@endif
			</p>
		</div>
		
	</section>

	<section class=" flex-wr-s-st m-b-15-sr991 p-t-10">
		@if($club->resort)
		<div class="">
			<!-- Title section -->
			<div class="flex-col-c-s p-b-23">
				<h3 class="t1-b-1 cl-3 m-b-11">
					{{__('Resort')}}
				</h3>

				<div class="size-a-2 bg-3"></div>
			</div>

			<p class="t1-s-2 cl-6 m-b-17">
				{!! $club->resort[config('app.locale','en')] !!}
			</p>
		</div>
		@endif
	</section>

	<section class=" flex-wr-s-st m-b-15-sr991 p-t-10">
		@if($club->apartments)
		<div class="">
			<!-- Title section -->
			<div class="flex-col-c-s p-b-23">
				<h3 class="t1-b-1 cl-3 m-b-11">
					{{__('Apartments')}}
				</h3>

				<div class="size-a-2 bg-3"></div>
			</div>

			<p class="t1-s-2 cl-6 m-b-17">
				{!! $club->apartments[config('app.locale','en')] !!}
			</p>
		</div>
		@endif
	</section>

	<section class=" flex-wr-s-st m-b-15-sr991 p-t-10">
	    <div class="row">
	        
	    </div>
		@if($club->amenities)
		<div class="col-md-6">
			<!-- Title section -->
			<div class="flex-col-c-s p-b-23">
				<h3 class="t1-b-1 cl-3 m-b-11">
					{{__('Amenities')}}
				</h3>

				<div class="size-a-2 bg-3"></div>
			</div>

			<p class="t1-s-2  m-b-17">
				{!! $club->amenities[config('app.locale','en')] !!}
			</p>
		</div>
		@endif
		<div class="col border" style="border:1px solid #aaa !important;">
		    <h3 class="t1-b-1 cl-3 m-b-11">
					{{__('Availability')}}
				</h3>
            <ul class="nav nav-tabs caln" id="caln" style="background: #eee;">
                @if($club->jan)
                <li class=" tab-header"><a data-toggle="tab" href="#jan"> <strong>Jan.</strong> </a></li>
                @endif
                @if($club->feb)
                <li class=" tab-header"><a  data-toggle="tab" href="#feb"><strong>Feb.</strong></a></li>
                @endif
                @if($club->mar)
                <li class=" tab-header"><a data-toggle="tab" href="#mar"><strong>Mar.</strong></a></li>
                @endif
                @if($club->apr)
                <li class=" tab-header"><a  data-toggle="tab" href="#apr"><strong>Apr.</strong></a></li>
                @endif
                @if($club->may)
                <li class=" tab-header" ><a data-toggle="tab" href="#may"><strong>May</strong></a></li>
                @endif
                @if($club->jun)
                <li class=" tab-header"><a  data-toggle="tab" href="#jun"><strong>Jun.</strong></a></li>
                @endif
                @if($club->jul)
                <li class=" tab-header"><a data-toggle="tab" href="#jul"><strong>Jul.</strong></a></li>
                @endif
                @if($club->aug)
                <li class=" tab-header"><a  data-toggle="tab" href="#aug"><strong>Aug.</strong></a></li>
                @endif
                @if($club->sep)
                <li class=" tab-header"><a  data-toggle="tab" href="#sep"><strong>Sep.</strong></a></li>
                @endif
                @if($club->oct)
                <li class=" tab-header"><a  data-toggle="tab" href="#oct"><strong>Oct.</strong></a></li>
                @endif
                @if($club->nov)
                <li class=" tab-header"><a  data-toggle="tab" href="#nov"><strong>Nov.</strong></a></li>
                @endif
                @if($club->decm)
                <li class=" tab-header"><a  data-toggle="tab" href="#decm"><strong>Dec.</strong></a></li>
                @endif
                
            </ul>

            <div class="tab-content p-t-15 p-b-15" style = "font-family: 'Montserrat', sans-serif !important;">
                @if ($club->jan) 
                <div id="jan" class="tab-pane fade active">
                    <p class="pt-3">{!!$club->jan!!}</p>
                </div>
                @endif
                @if ($club->feb) 
                <div id="feb" class="tab-pane fade">
                    <p class="pt-3">{!!$club->feb!!}</p>
                </div>
                @endif
                @if ($club->mar) 
                <div id="mar" class="tab-pane fade">
                    <p class="pt-3">{!!$club->mar!!}</p>
                </div>
                @endif
                @if ($club->apr) 
                <div id="apr" class="tab-pane fade">
                    <p class="pt-3">{!!$club->apr!!}</p>
                </div>
                @endif
                @if ($club->may) 
                <div id="may" class="tab-pane fade">
                    <p class="pt-3">{!!$club->may!!}</p>
                </div>
                @endif
                @if ($club->jun) 
                <div id="jun" class="tab-pane fade">
                    <p class="pt-3">{!!$club->jun!!}</p>
                </div>
                @endif
                @if ($club->jul) 
                <div id="jul" class="tab-pane fade">
                    <p class="pt-3">{!!$club->jul!!}</p>
                </div>
                @endif
                @if ($club->aug) 
                <div id="aug" class="tab-pane fade">
                    <p class="pt-3">{!!$club->aug!!}</p>
                </div>
                @endif
                @if ($club->sep) 
                <div id="sep" class="tab-pane fade">
                    <p class="pt-3">{!!$club->sep!!}</p>
                </div>
                @endif
                @if ($club->oct) 
                <div id="oct" class="tab-pane fade">
                    <p class="pt-3">{!!$club->oct!!}</p>
                </div>
                @endif
                @if ($club->nov) 
                <div id="nov" class="tab-pane fade">
                    <p class="pt-3">{!!$club->nov!!}</p>
                </div>
                @endif
                @if ($club->decm) 
                <div id="decm" class="tab-pane fade">
                    <p class="pt-3">{!!$club->decm!!}</p>
                </div>
                @endif
                
            </div>
        </div>
	</section>
</div>

<div class="container">
	<div class="row " >
	<div class=" col-md-6 col-sm-12 p-t-75" style="text-align: center;">
	<iframe width="100%" height="340" src="{{$club->video_link}}">
        </iframe>
	</div>

	<div class="col-md-6 col-sm-12" style="text-align: center; width: 100%;">
        <div class="" style="padding-left: 50px; padding-right: 50px;">
            <div class="pb-2" style="font-weight: bold;">
                <!-- Contact -->
             
                    <div class=" justify-content-center">
                        <div class="p-b-60">
                            <h3 class="t1-m-5 cl-3 m-b-44">
                                <strong>{{__('Rental Inquiry')}}<strong>
                            </h3>
                            <form id="contact-form" class="validate-form" action="{{ url('sendContact') }}" method="post"
                        role="form" name="contact">
                        {{ csrf_field() }}
                        <div class="m-b-15 validate-input" data-validate="Name is required">
                            <input class="size-a-3 t1-m-2 plh-6 cl-6 p-rl-20 bo-1-rad-4 bcl-12 focus-in1" type="text"
                                name="name" placeholder="{{ __('Your Name') }}" required>
                        </div>

                        <div class="m-b-15 validate-input" data-validate="Valid email is: ex@abc.xyz">
                            <input class="size-a-3 t1-m-2 plh-6 cl-6 p-rl-20 bo-1-rad-4 bcl-12 focus-in1" type="email"
                                name="email" placeholder="{{ __('Your Email') }}" required>
                        </div>

                        <div class="m-b-15 validate-input" data-validate="Phone is required">
                            <div class="row">
                                <div class="col-md-7">
                                    <select class="size-a-3 t1-m-2 plh-6 cl-6 p-rl-20 bo-1-rad-4 bcl-12 focus-in1"
                                        name="phonecode" required>
                                        <option value=""> {{ __('Select Country') }} </option>
                                        @foreach (\App\Models\Country::orderBy('name')->get() as $country)
                                            <option class="" value="{{ $country->phonecode }}">
                                                {{ $country->name }} (+{{ $country->phonecode }})
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-md-5">
                                    <input class="size-a-3 t1-m-2 plh-6 cl-6 p-rl-20 bo-1-rad-4 bcl-12 focus-in1"
                                        type="number" name="phone" placeholder="{{ __('Phone Number') }}" required>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-12">
                                <select class="size-a-3 t1-m-2 plh-6 cl-6 p-rl-20 bo-1-rad-4 bcl-12 focus-in1"
                                    name="subject">
                                    <option value="">{{ __('Select Subject') }}</option>
                                    <option value="Rent">{{ __('Rent') }}</option>
                                    <option value="Buy">{{ __('Buy') }}</option>
                                    <option value="Sell">{{ __('Sell') }}</option>
                                    <option value="Inquery">{{ __('Inquery') }}</option>
                                    <option value="Management">{{ __('Management') }}</option>
                                    <option value="Other">{{ __('Other') }}</option>
                                </select>
                            </div>
                        </div>


                        <div class="m-b-30 validate-input" data-validate="Message is required">
                            <textarea class="size-a-14 t1-m-2 plh-6 cl-6 p-rl-20 p-tb-13 bo-1-rad-4 bcl-12 focus-in1" name="content"
                                placeholder="{{ __('Your Message') }}" required></textarea>
                        </div>

                        <button type="submit"
                            class="size-a-15 flex-c-c bg-11 t1-s-2 text-uppercase cl-0 hov-btn1 trans-02 p-rl-15">
                            {{ __('Send Email') }}
                        </button>

                    </form>
                        </div>
                    </div>
            </div>
        </div></div>
</div>
</div>

<div class="row m-0">
    <div class="col">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q={{$club->title['en']}}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;min-height:450px; height:100%;width:100%;}</style></div></div>
    </div>
    @if($club->internalmap)
    <div class="col-md-8">
        <a href="{{asset('images/'.$club->internalmap)}}">
        <img style="max-width:100%; width:100%;" src="{{asset('images/'.$club->internalmap)}}">
        </a>
    </div>
    @endif
</div>








@endsection
@section('scripts')
<script>
    $(document).ready(function(){
        
        if($('#caln').find('a')[0])
        {
           $('#caln').find('a')[0].click(); 
        }
    });
</script>
@endsection