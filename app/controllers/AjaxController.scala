package controllers

import play.api._
import play.api.mvc._

import models._

import com.typesafe.config._
import java.io.File

/**
 * Ajax用 処理
 */
object AjaxController extends Controller {

  def getCommodity = Action {
    Ok("{" + "\"" + "ID" + "\"" + ":" + "\"" + "123456789" + "\"}")
  }

}
