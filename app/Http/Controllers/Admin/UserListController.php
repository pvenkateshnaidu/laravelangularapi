<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Model\Submissions;
use App\Model\Consultants;
use Auth;
use App\TimeSheet;
use App\UserDocuments;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
class UserListController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = User::get();
        return response()->json(['user' => $user], 200);
    }
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getschedules()
    {
        //
        $user = User::get();
        return response()->json(['user' => $user], 200);
    }
    public function dataList()
    {
        //
        if(Auth::user()->role=='Admin')
        {
        $user = User::where('role','=','User')->get();
        $schedule = Submissions::where('reportId','=',Auth::user()->reportId)->get();
        return response()->json(['user' => $user,'schedules'=>$schedule], 200);
        }else{
            return response()->json(['user' => '','schedules'=>''], 200);
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = User::find(Auth::user()->id);
        return response()->json($user, 200);
    }
    public function getCurrentUserData()
    {
        $user = User::find(Auth::user()->id);
        return response()->json(['user' => $user], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:5',
        ]);
        $joindate ='';
        if($request->joinDate)
        $joindate = $request->joinDate;
        $user = User::create([
            'name' => $request->name,
            'lastName' =>$request->lastName,
            'companyName' => $request->companyName,
            'joinDate' => $joindate,
            'technology' => $request->technology,
            'rate' => $request->rate,
            'role' => $request->role,
            'address' => $request->address,
            'address1' => $request->address1,
            'zipcode' => $request->zipcode,
            'city' => $request->city,
            'state' => $request->state,
            'paymentType' => $request->paymentType,
            'paymentMode' => $request->paymentMode,
            'hoursperWeek' =>$request->hoursperWeek,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json(['user' => "User Created Successfully"], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = User::find($id);
        return response()->json(['user' => $user], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $user = User::find($id);
        return response()->json(['user' => $user], 200);
    }
    public function editconsultantUser($id)
    {
        //
        $user = Consultants::find($id);
        return response()->json(['user' => $user], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {


            $user            = User::find($id);
            if($request->name)
            $user->name  = $request->name;
            if($request->email)
            $user->email  = $request->email;
            if($request->password)
            $user->password  = bcrypt($request->password);
            if($request->lastName)
            $user->lastName  = $request->lastName;
            if($request->companyName)
            $user->companyName  = $request->companyName;
            if($request->joinDate)
            $user->joinDate  = $request->joinDate;
            if($request->technology)
            $user->technology  = $request->technology;
            if($request->rate)
            $user->rate  = $request->rate;
            if($request->role)
            $user->role  = $request->role;
            if($request->address)
            $user->address  = $request->address;
            if($request->address1)
            $user->address1  = $request->address1;
            if($request->state)
            $user->state  = $request->state;
            if($request->city)
            $user->city  = $request->city;
            if($request->zipcode)
            $user->zipcode  = $request->zipcode;
            if($request->paymentType)
            $user->paymentType  = $request->paymentType;
            if($request->paymentMode)
            $user->paymentMode  = $request->paymentMode;
            if($request->hoursperWeek)
            $user->hoursperWeek  = $request->hoursperWeek;
            $user->save();
/*
        $user->update([
            'name' => $request->name,
            'lastName' =>$request->lastName,
            'companyName' => $request->companyName,
            'technology' => $request->technology,
            'rate' => $request->rate,
            'role' => $request->role,
            'address' => $request->address,
            'paymentType' => $request->paymentType,
            'paymentMode' => $request->paymentMode,
            'hoursperWeek' =>$request->hoursperWeek,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]); */

        return response()->json(['user' => $user,'message' => 'User Updated Successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json(['user' => $user,'message' => 'User Deleted Successfully'], 200);
    }
    public function getUserDetails()
    {

    }

    public function getLoadTimeSheetuserw()
    {

        $currentDate = \Carbon\Carbon::now();
        $fagoDate = Carbon::now()->startOfWeek();
        $lagoDate = $currentDate->subDays($fagoDate->dayOfWeek)->subWeek();
       // $agoDate = $currentDate->subDays($currentDate->dayOfWeek + 1);;
        $firstdaytimesheet = TimeSheet::select(DB::raw('sum(duration) as total'))->whereBetween('fromDate',
         [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
        ->where('userId','=',Auth::user()->id)
        ->first();
        $seconddaytimesheet = TimeSheet::select(DB::raw('sum(duration) as total'))->whereBetween('fromDate', [Carbon::now()->subDays(7)->startOfWeek(),Carbon::now()->subDays(7)->endOfWeek()])
        ->where('userId','=',Auth::user()->id)
        ->first();
        $thirddaytimesheet = TimeSheet::select(DB::raw('sum(duration) as total'))->whereBetween('fromDate', [Carbon::now()->subDays(14)->startOfWeek(),Carbon::now()->subDays(14)->endOfWeek()])
        ->where('userId','=',Auth::user()->id)
        ->first();
        $fourdaytimesheet = TimeSheet::select(DB::raw('sum(duration) as total'))->whereBetween('fromDate', [Carbon::now()->subDays(21)->startOfWeek(),Carbon::now()->subDays(21)->endOfWeek()])
        ->where('userId','=',Auth::user()->id)
        ->first();
      //  $wordCount = $firstdaytimesheet->total;
        $dates = [Carbon::now()->startOfWeek()->format('M d Y')."-". Carbon::now()->endOfWeek()->format('M d Y'),
        Carbon::now()->subDays(7)->startOfWeek()->format('M d Y')."-". Carbon::now()->subDays(7)->endOfWeek()->format('M d Y'),
        Carbon::now()->subDays(14)->startOfWeek()->format('M d Y')."-". Carbon::now()->subDays(14)->endOfWeek()->format('M d Y'),
        Carbon::now()->subDays(21)->startOfWeek()->format('M d Y')."-". Carbon::now()->subDays(21)->endOfWeek()->format('M d Y')];
        return response()->json(['getDatauserw' => [$firstdaytimesheet->total,$seconddaytimesheet->total,$thirddaytimesheet->total,$fourdaytimesheet->total],'weekdates'=>$dates,'message' => ''], 200);
    }
    public function saveDocument(Request $request)
    {
        /* $this->validate($request, [
            'duration' => 'required'
        ]); */


        $otherDocumentpath = '';

        if ($request->hasFile('documentFile')) {

            $filenameWithExt = $request->file('documentFile')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('documentFile')->getClientOriginalExtension();
            // Filename to store
            $resumepath = $filename . '_' . time() . '.' . $extension;
            // Upload Image
            $path = $request->file('documentFile')->storeAs('uploads/documenfile', $resumepath);


            /*   $stringname = preg_replace('/\s+/', '', Auth::user()->name);
            $id = Auth::user()->id;
            // Get filename with the extension
            $filenameWithExt = $request->file('resume')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('resume')->getClientOriginalExtension();
            // Filename to store
            $otherDocumentpath = $stringname . '-' . $id . '.' . $extension;
            // Upload Image
            $path = $request->file('resume')->storeAs('uploads/resume', $otherDocumentpath); */


            if($resumepath)
            {
                $user = UserDocuments::create([
                    'documentFile' =>  $resumepath,
                    'documentType' =>$request->documentType,
                    'userId' => $request->userId,

                ]);
            }
            return response()->json(['path' => ''], 200);
        }




        return response()->json(['user' => "Error"], 400);
    }
    public function getPlacedEmployees()
    {
        $user = Consultants::where('wStatus' , '=','S')->get();
        return response()->json(['user' => $user], 200);
    }

}
