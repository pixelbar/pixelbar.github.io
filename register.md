---
layout: page
title: Register
---

<p class="message">
  <a href="/about">Read more about our memberships →</a>
</p>

### Request to become a member

All requests are checked personally and we'll contact you within roughly 48 hours.

<script src='https://www.google.com/recaptcha/api.js'></script>


<form>
  <table>
    <tbody>
      <tr>
        <td><label class="control-label">What type of hacker are you?</label></td>
        <td>
          <input type="radio" name="membertype" value="member" id="member" checked><label class="control-label" for="member">Member of the Space (25 euro)</label></input> <br />
          <input type="radio" name="membertype" value="friend" id="friend"><label class="control-label" for="friend">Friend of the Space (5 euro)</label></input>
        </td>
      </tr>

      <tr>
        <td><label class="control-label" for="firstname">Firstname</label></td>
        <td><input type="text" class="form-control" id="firstname" name="firstname" data-validate="text,minlenth[2],maxlength[30],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="lastname">Lastname</label></td>
        <td><input type="text" class="form-control" id="lastname" name="lastname" data-validate="text,minlength[2],maxlength[50],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="nickname">Nickname</label></td>
        <td><input type="text" class="form-control" id="nickname" name="nickname" data-validate="text,minlength[2],maxlength[30],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="postalcode">Postal</label></td>
        <td><input type="text" class="form-control" id="postalcode" name="postalcode" data-mask="9999-AA" data-validate="minlength[6],maxlength[7],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="city">City</label></td>
        <td><input type="text" class="form-control" id="city" name="city" data-validate="text,minlength[2],maxlength[30],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="streetnumber">Street + number</label></td>
        <td><input type="text" class="form-control" id="streetnumber" name="streetnumber" data-validate="text,minlength[2],maxlength[30],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="phonenumber">Phone</label></td>
        <td><input type="text" class="form-control" id="phonenumber" name="phonenumber" data-validate="number,minlength[10],maxlength[30],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="age">Age</label></td>
        <td><input type="text" class="form-control" id="age" name="age" data-validate="number,maxlength[3],required"/></td>
      </tr>
      <tr>
        <td><label class="control-label" for="notes">Notes*</label></td>
        <td><textarea class="form-control autogrow" id="notes" name="notes" data-validate="maxlength[1000]" rows="5"></textarea></td>
      </tr>
    </tbody>
  </table>

  * optional

  <div class="form-group">
    <div class="g-recaptcha" data-sitekey="6Lc3pwwTAAAAAPaUYb7uskECmmY50pY3IMtqHnYr" style="-moz-transform:scale(0.77); -ms-transform:scale(0.77); -o-transform:scale(0.77); -moz-transform-origin:0; -ms-transform-origin:0; -o-transform-origin:0; -webkit-transform:scale(0.77); transform:scale(0.77); -webkit-transform-origin:0 0; transform-origin:0; filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.77,M12=0,M21=0,M22=0.77,SizingMethod='auto expand');" ></div>
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-success">Submit request</button>
  </div>
</form>