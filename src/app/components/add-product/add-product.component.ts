import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  minDate: Date;

  isAlreadyExistName: boolean;
  isAlreadyExistCode: boolean;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.createFormGroup();
  }

  createFormGroup() {
    this.productForm = this.formBuilder.group({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      validateDate: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])
    });
  }

  getErrorMessagePrice() {
    if (this.productForm.controls.price.hasError('required')) {
      return 'Veuillez remplir le prix de vente';
    }

    return this.productForm.controls.price.hasError('pattern') ? 'Veuillez vérifier votre prix de vente' : '';
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  createProduct() {
    this.productService.create(this.productForm.value).subscribe(response => {
      this.toastrService.success('Succès de création du produit.', 'Confirmation', {
        timeOut: 1000
      });
      this.router.navigateByUrl('/');
    }, error => {
      this.toastrService.error(
        'Oups! une erreur serveur s’est produite',
        'Error', {
          timeOut: 1000
        });
    });
  }

  searchCode() {
    this.productService.findByCode(this.productForm.controls.code.value).subscribe(response => {
      if (response && response.id && response.id > 0) {
        this.isAlreadyExistCode = true;
      } else {
        this.isAlreadyExistCode = false;
      }
    });
  }

  searchName() {
    this.productService.findByName(this.productForm.controls.name.value).subscribe(response => {
      if (response && response.id && response.id > 0) {
        this.isAlreadyExistName = true;
      } else {
        this.isAlreadyExistName = false;
      }
    });
  }
}
