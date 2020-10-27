<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;

class UserApiController extends Controller
{
    
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    

    public function store(Request $request)
    {
        $request['name'] = $request['name'] . ' ' . $request['lastname'];
        $save = User::create($request->except('lastname', 'profile'));
        if($save) {
            $response = [ 'success' => true, 'message' => 'Usuário cadastrado com sucesso!', 'code' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível cadastrar usuário!', 'code' => 401 ];
        }
        return response()->json($response);
    }



    public function show($id)
    {
        $user = User::
                select('users.*')
                ->where('users.id', $id)
                ->first();
        return response()->json($user);
    }


    
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $request['name'] = $request['name'] . ' ' . $request['lastname'];
        if($request['profile'] == 1) {
            $request['cpf'] = $request['cpf'];
            $request['cnpj'] = null;
        } else {
            $request['cpf'] = null;
            $request['cnpj'] = $request['cnpj'];
        }

        $user->update($request->except('lastname', 'profile'));

        if($user) {
            $response = [ 'success' => true, 'message' => 'Usuário alterado com sucesso!', 'code' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível alterar o usuário!', 'code' => 401 ];
        }
        return response()->json($response);
    }


    
    public function destroy($id)
    {
        $user = User::find($id);
        $delete = $user->delete();
        if($delete) {
            $response = [ 'success' => true, 'message' => 'Usuário deletado com sucesso!', 'code' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível deletar o usuário!', 'code' => 401 ];
        }
        return response()->json($response);
    }
}
