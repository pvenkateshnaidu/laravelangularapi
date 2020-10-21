<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = User::find(Auth::user()->id);
        return response()->json($user, 200);
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


        $user = User::create([
            'name' => $request->name,
            'lastName' =>$request->lastName,
            'companyName' => $request->companyName,
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

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
}
