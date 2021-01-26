<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TimeSheetDocuments;
use Carbon\Carbon;
use Auth;
use App\TimeSheet;
use Illuminate\Support\Facades\DB;
class myObject
{
    public $documentId;
    public $dateOfWeek;
    public $name;
    public $doucmentName;
    public $startWeek;
    public $endWeek;
}
class AdminDocumentsController extends Controller
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


        $timesheet = TimeSheetDocuments::with('user_details')
        ->orderBy('dateOfWeek', 'DESC')
        ->get();


        $MyObjects = array();

        foreach($timesheet as $value)
        {
            $MyObject = new myObject;
            $MyObject->documentId =$value->documentId;
            $MyObject->dateOfWeek =$value->dateOfWeek;
            $MyObject->name=$value->user_details->name;
            $MyObject->doucmentName =$value->doucmentName;
            $from= Carbon::parse($value->dateOfWeek)->startOfWeek(Carbon::SUNDAY)->format('Y-m-d');
            $to= Carbon::parse($value->dateOfWeek)->endOfWeek(Carbon::SATURDAY)->format('Y-m-d');
            $MyObject->startWeek =$from;
            $MyObject->endWeek =$to;
            $MyObjects[] = $MyObject;
        }
        return response()->json(['documents' => $MyObjects ], 200);
    }
    public function getTimesheetsbyuserId(Request $request)
    {
        // return response()->json(['timesheets' => $request->get('date')], 200);
        $getHours = 0;
        if ($request->userId) {

            $timesheet = TimeSheetDocuments::with('user_details')
                ->when($request->get('date'), function ($query) use ($request) {
                    if ($request->get('date')) {
                        $query->whereYear('dateOfWeek', '=', \Carbon\Carbon::parse($request->get('date'))->format('Y'));
                        $query->whereMonth('dateOfWeek', '=', \Carbon\Carbon::parse($request->get('date'))->format('m'));
                    }
                })

                ->where('userId', '=', $request->userId)
                ->orderBy('dateOfWeek', 'DESC')
                ->get();

                $MyObjects = array();

                foreach($timesheet as $value)
                {
                $MyObject = new myObject;
                $MyObject->documentId =$value->documentId;
                $MyObject->dateOfWeek =$value->dateOfWeek;
                $MyObject->name=$value->user_details->name;
                $MyObject->doucmentName =$value->doucmentName;
                $from= Carbon::parse($value->dateOfWeek)->startOfWeek(Carbon::SUNDAY)->format('Y-m-d');
                $to= Carbon::parse($value->dateOfWeek)->endOfWeek(Carbon::SATURDAY)->format('Y-m-d');
                $MyObject->startWeek =$from;
                $MyObject->endWeek =$to;
                $MyObjects[] = $MyObject;
                }

               $getHours =   TimeSheet::select(DB::raw('sum(duration) as total'))
               ->when($request->get('date'), function ($query) use ($request) {
                if ($request->get('date')) {
                    $query->whereYear('fromDate', '=', \Carbon\Carbon::parse($request->get('date'))->format('Y'));
                    $query->whereMonth('fromDate', '=', \Carbon\Carbon::parse($request->get('date'))->format('m'));
                        }
                    })
               ->where('userId','=',$request->userId)
               ->first();

        } else {
                    $timesheet = TimeSheetDocuments::with('user_details')
                    ->orderBy('dateOfWeek', 'DESC')
                    ->get();


                    $MyObjects = array();

                    foreach($timesheet as $value)
                    {
                    $MyObject = new myObject;
                    $MyObject->documentId =$value->documentId;
                    $MyObject->dateOfWeek =$value->dateOfWeek;
                    $MyObject->name=$value->user_details->name;
                    $MyObject->doucmentName =$value->doucmentName;
                    $from= Carbon::parse($value->dateOfWeek)->startOfWeek(Carbon::SUNDAY)->format('Y-m-d');
                    $to= Carbon::parse($value->dateOfWeek)->endOfWeek(Carbon::SATURDAY)->format('Y-m-d');
                    $MyObject->startWeek =$from;
                    $MyObject->endWeek =$to;
                    $MyObjects[] = $MyObject;
                    }
        }

        $currentUser = Auth::user();
        return response()->json(['documents' => $MyObjects,'getHours'=> $getHours->total, "user" => $currentUser], 200);
    }
}
