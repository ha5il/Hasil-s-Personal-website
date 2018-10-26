@extends('includes.master')

@section('head')
<meta name="description" content="Hasil's Personal Site. Check out to know more and contact him. ">
<title>Hire Hasil</title>
@endsection

@section('main')
<div class='container' style="margin-top:5rem">
    @include('includes.messages')
    <h3>Interested in teaming up with me?</h3>
    <div class='row'>
        <div class="col-lg-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="heading heading-5 strong-600">OS</h5>
                    <table class="table table-hover align-items-center">
                        <tbody>
                            <tr class="bg-white" scope="row">
                                <td>1.) Linux</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>2.) Windows</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>3.) macOS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="heading heading-5 strong-600">Hardware/Software Platforms I use</h5>
                    <table class="table table-hover align-items-center">
                        <tbody>
                            <tr class="bg-white" scope="row">
                                <td>1.) Laravel</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>2.) Arduino</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>3.) Wordpress</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>4.) Magento</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>5.) Open Cart</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-5">
            <div class="card">
                <div class="card-body">
                    <h5 class="heading heading-5 strong-600">Tools I am familiar with</h5>
                    <table class="table table-hover align-items-center">
                        <tbody>
                            <tr class="bg-white" scope="row">
                                <td>1.) Photoshop</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>2.) AutoCAD</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>3.) Android and Visual Studio</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>4.) Primavera</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>5.) MiPower</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="heading heading-5 strong-600">Experience on</h5>
                    <table class="table table-hover align-items-center">
                        <tbody>
                            <tr class="bg-white" scope="row">
                                <td>1.) C/C++ and C#</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>2.) Full Stack</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>3.) HTML/JS/CSS</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>4.) PHP</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>5.) ASM</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>6.) JAVA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <h5 class="heading heading-5 strong-600">What can I build / devlop...</h5>
                    <table class="table table-hover align-items-center">
                        <tbody>
                            <tr class="bg-white" scope="row">
                                <td>1.) Script for scrapping, processing and storing data</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>2.) Highly Dynamic and Scalable web platform</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>3.) Webapp and Android App</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>4.) Graphic / UI design on Photoshop</td>
                            </tr>
                            <tr class="bg-white" scope="row">
                                <td>5.) Portabe hardware interfacing RFID, physical sensors, Wifi for IOT and much
                                    more.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <h3 style="margin-top:1rem;margin-left:6rem;">Get in touch</h3>
    <div class="row justify-content-center">
        <div class="col-lg-10">
            <div class="card">
                <div class="card-body">
                    <form action="{{route('hireMeForm')}}" method="POST">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Name</label>
                                <input type="text" class="form-control" name="name" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Email</label>
                                <input type="email" class="form-control validate" name="email" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">City</label>
                                <input type="text" class="form-control" name="city" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Country</label>
                                <input type="text" class="form-control" name="country" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Job offering for</label>
                                <select class="form-control" name="jobFor">
                                    <option selected>Choose...</option>
                                    <option>Software development</option>
                                    <option>Electrical field work</option>
                                    <option>Sales and support</option>
                                    <option>Electronic project</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputState">Shift of work</label>
                                <select class="form-control" name="timeFor">
                                    <option selected>Choose...</option>
                                    <option>Day full time</option>
                                    <option>Night full time</option>
                                    <option>Part time</option>
                                    <option>Contract based</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>More info here</label>
                            <textarea class="form-control textarea-autosize" rows="4" name="message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-sm btn-dark">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection