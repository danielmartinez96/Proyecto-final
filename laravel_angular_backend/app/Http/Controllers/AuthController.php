<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AuthController extends Controller
{
    //
    public function login(Request $request){

        $request ->validate([
            'email'=> 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean',
        ]);

        $credentials = request(['email', 'password']);

        if(!Auth::attempt($credentials)){
            return response()-> json([
                'message'=>'Unauthorized'], 401); 
        }

        $user = $request-> user();
        $tokenResult = $user -> createToken('Personal Access Token');
        $token = $tokenResult -> token;

        if($request->remember_me){
            $token->expires_at=Carbon::now()->addWeeks(1);
        }

        $token-> save();

        return response()-> json([
            'access_token' => $tokenResult->accessToken,
            'token_type'=> 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at)
                ->toDateTimeString(),
        ]);
    }

}
