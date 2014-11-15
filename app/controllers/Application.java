package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
    	String hogehoge =  "{" + "\"" + "ID" + "\"" + ":" + "\"" + "123456789" + "\"}";
        return ok(index.render(hogehoge));
    }
    
    public static Result commodity() {
    	String hogehoge =  "{" + "\"" + "ID" + "\"" + ":" + "\"" + "123456789" + "\"}";
        return ok(json.render(hogehoge));
    }

}
